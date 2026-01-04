import type { User } from "~/shared/types/user";

export const useAuthStore = defineStore('auth', () => {
  const http = useHttp('auth');
  const baseURL = useBaseUrl('auth');
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
      resetUser();
      setError(err);
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
      setError(err);
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