import { useAuthStore } from "~/stores/auth/authStore";

export default defineNuxtPlugin(async () => {
    const auth = useAuthStore();

    if (auth.resolved) return;
    await auth.loadUser();
});