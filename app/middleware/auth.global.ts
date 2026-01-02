import { useAuthStore } from "~/stores/auth/authStore"

export default defineNuxtRouteMiddleware(async (to) => {
    const auth = useAuthStore();

    if(!auth.isLoggedIn){
        try {
           await auth.loadUser();           
        } catch (error) {
            if(to.meta.auth) return navigateTo('/login');
        }
    }
})