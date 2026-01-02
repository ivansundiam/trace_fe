import type { User } from "~/shared/types/user";

export const useAuthStore = defineStore('auth', () => {
  const api = useApiFetch('auth');

  const currentUser = ref<User | null>(null);

  function setUser(value: User) {
    currentUser.value = value
  }

  async function csrf() {
    await $fetch('/sanctum/csrf-cookie', {
      baseURL: useRuntimeConfig().public.apiBase,
      credentials: 'include'
    })
  }

  async function login(email: string, password: string): Promise<User> {
    await csrf()

    return await api('login', {
      method: 'POST',
      body: { email, password },
    });
  }

  return {
    currentUser,
    setUser,
    login
  }
});