import type { User } from "~/shared/types/user";

export const useAuthStore = defineStore('auth', () => {
  const http = useHttp('auth');
  const baseURL = useBaseUrl('auth');
  const currentUser = ref<User | null>(null);
  const loading = ref<boolean>(false);
  const resolved = ref<boolean>(false);
  const error = ref<any | null>(null);

  const isLoggedIn = computed<boolean>(() => !!currentUser.value)

  function setUser(value: User | null) {
    currentUser.value = value
  }

  function setError(err: any) {
    error.value = err.data;
  }

  async function loadUser() {
    try {
      const user = await $fetch<User>('user', {
        baseURL,
        credentials: 'include',
        headers: getServerHeaders()
      });
      setUser(user);
    } catch (err: any) {
      setUser(null);
      setError(err);
      return null;
    } finally {
      resolved.value = true;
    }
  }

  async function login(email: string, password: string) {
    error.value = null;
    loading.value = true;
    
    try {
      const user = await http<User>('login', {
        method: 'POST',
        body: { email, password },
      });

      setUser(user);
      navigateTo('/')
    } catch (err: any) {      
      setError(err);
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    loading.value = true;

    try {
      await http('logout', { method: 'POST' });
      setUser(null);
      navigateTo('/login');
    } finally {
      loading.value = false
    }
  }

  return {
    currentUser,
    isLoggedIn,
    error,
    loading,
    resolved,
    setUser,
    login,
    loadUser,
    logout
  }
});