import { useAuthStore } from "~/stores/auth/useAuthStore";

export default defineNuxtPlugin(async () => {
  const auth = useAuthStore()
  if (!auth.resolved) await auth.loadUser();
});