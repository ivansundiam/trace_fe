<script setup lang="ts">
    import { useAuthStore } from '~/stores/auth/authStore';

    definePageMeta({
        layout: 'public',
        staticNav: true
    });

    const auth = useAuthStore();

    const showPass = ref<boolean>(false);
    const form = reactive({
        email: '',
        password: '',
    });

    const submit = async () => {
        await auth.login(form.email, form.password);
    }

</script>

<template>
    <div class="py-16">
        <section class="auth-card">
            <header class="auth-header">
                <h1 class="title">Welcome back</h1>
                <p class="subtitle">Sign in to Trace</p>
            </header>

            <form class="space-y-5" @submit.prevent="submit">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="email" v-model="form.email" placeholder="johndoe@email.com" />
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input id="password" :type="showPass ? 'text' : 'password'" v-model="form.password"
                        placeholder="Enter your password" />
                    <div class="eye-toggle">
                        <PasswordToggle v-model="showPass" />
                    </div>
                </div>

                <div class="form-meta">
                    <label class="remember">
                        <input type="checkbox" />
                        Remember me
                    </label>

                    <a href="#" class="text-link">Forgot password?</a>
                </div>

                <ButtonComponent submit variant="dark" width="full">
                    Log in
                </ButtonComponent>

                <div class="divider">
                    <span>or</span>
                </div>

                <button type="button" class="btn-google">
                    <img src="~/assets/images/public/google-logo.png" alt="Google" />
                    Sign in with Google
                </button>

                <p class="register">
                    New to Trace?
                    <a href="#" class="text-link">Create an account</a>
                </p>
            </form>
        </section>
    </div>
</template>


<style scoped>
    @reference 'tailwindcss';
    @reference '~/assets/css/app.css';
    @import '~/assets/css/forms.css';

    .auth-card {
        @apply max-w-md mx-auto bg-white px-6 py-10 rounded-xl shadow-sm;
    }

    .auth-header {
        @apply mb-8;
    }

    .title {
        @apply text-3xl font-semibold font-heading capitalize;
    }

    .subtitle {
        @apply text-base mt-1 text-secondary;
    }

    .form-group {
        @apply relative mb-4;
    }

    .eye-toggle {
        @apply absolute right-3 top-1/2 opacity-60;
    }

    .divider {
        @apply relative w-full border-t border-gray-300;
    }

    .divider span {
        @apply absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white px-2;
    }

    .form-meta {
        @apply flex items-center justify-between text-sm;
    }

    .remember {
        @apply flex items-center gap-2 cursor-pointer;
    }

    .btn-google {
        @apply flex items-center justify-center w-full hover:bg-primary-hover gap-3 rounded-md py-2 border transition-colors border-gray-400;
    }

    .btn-google img {
        @apply size-5;
    }

    .register {
        @apply text-center text-sm mt-4;
    }
</style>