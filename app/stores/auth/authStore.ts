import type { User } from "~/shared/types/user";

export const useAuthStore = defineStore('auth', () => {
  const http = useHttp('auth');

  const currentUser = ref<User | null>(null);

  function setUser(value: User) {
    currentUser.value = value
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
    login
  }
});