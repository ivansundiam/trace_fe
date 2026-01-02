import type { User } from "~/shared/types/user";

export const useAuthStore = defineStore('auth', () => {
  const http = useHttp('auth');

  //STATE
  const currentUser = ref<User | null>(null);

  //GETTERS
  const isLoggedIn = computed<boolean>(() => !!currentUser.value)

  // ACTIONS
  function setUser(value: User) {
    currentUser.value = value
  }

  async function loadUser() {
    try {
      const user = await http<User>('user');
      setUser(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async function login(email: string, password: string) {
    try {
      const user = await http<User>('login', {
        method: 'POST',
        body: { email, password },
      });
  
      setUser(user);
      navigateTo('/')
    } catch (error) {
      console.log(error);
    
    }
  }

  return {
    currentUser,
    setUser,
    login,
    loadUser,
    isLoggedIn
  }
});