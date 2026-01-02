import type { User } from "~/shared/types/user";

export const useAuthStore = defineStore('auth', () => {
  const http = useHttp('auth');
  const currentUser = ref<User | null>(null);
  const loading = ref<boolean>(false);
  const resolved = ref<boolean>(false);
  const error = ref<any | null>(null);

  const isLoggedIn = computed<boolean>(() => !!currentUser.value)

  function setUser(value: User) {
    currentUser.value = value
  }

  function resetUser() {
    currentUser.value = null;
  }

  async function loadUser(): Promise<User | null> {
    try {
      const user = await http<User>('user');
      setUser(user);
      return user;
    } catch (err: any) {
      resetUser();
      error.value = err;
      console.log(error.value);
      
      return null;
    } finally {
      resolved.value = true;
    }
  }

  async function login(email: string, password: string) {
    try {
      loading.value = true
      const user = await http<User>('login', {
        method: 'POST',
        body: { email, password },
      });

      setUser(user);
      navigateTo('/')
    } catch (err: any) {
      error.value = err.error.message;
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    try {
      loading.value = true
      await http('logout', { method: 'POST' });
      resetUser();
      navigateTo('/login');
    } finally {
      loading.value = false
    }
  }

  return {
    currentUser,
    isLoggedIn,
    loading,
    resolved,
    setUser,
    login,
    loadUser,
    logout
  }
});