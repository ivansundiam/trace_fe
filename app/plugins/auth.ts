export default defineNuxtPlugin(async () => {
  const auth = useAuthStore()
  if (!auth.resolved) await auth.loadUser();
});