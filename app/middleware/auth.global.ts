export default defineNuxtRouteMiddleware(async (to) => {
    const auth = useAuthStore();

    if (to.meta.auth === true && !auth.isLoggedIn) return navigateTo('/login');

    if (to.path === '/login' && auth.isLoggedIn) return navigateTo('/');

})