<script setup lang="ts">
  import { useAuthStore } from '~/stores/auth/useAuthStore';
  import UserAvatar from '../UserAvatar.vue';

  const route = useRoute();
  const scrolled = ref(false)
  const staticNav = computed(() => route.meta.staticNav ?? false)

  const auth = useAuthStore();

  const handleScroll = () => {
    scrolled.value = window.scrollY >= window.innerHeight / 4;
  };

  onMounted(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  });
  onUnmounted(() => window.removeEventListener('scroll', handleScroll));

</script>

<template>
  <nav class="nav-root" :class="{ 'show': scrolled || staticNav, 'fixed': !staticNav }">
    <div class="navbar">
      <div class="nav-group">
        <AppLogo />
        <div class="nav-item">
          Home
        </div>
        <div class="nav-item">
          About
        </div>
        <div class="nav-item">
          Contact
        </div>
        <div class="nav-item">
          Articles
        </div>
      </div>

      <div class="nav-group max-w-72 w-full">
        <div class="relative  w-full">
          <input type="text" placeholder="Search Destination...">

          <div class="absolute right-2 top-3  text-gray-400 ">
            <Icon name="ion:search" size="24" />
          </div>
        </div>
      </div>

      <div class="nav-group">
        <LocaleSelector />

        <template v-if="!auth.resolved">
          loading
        </template>

        <template v-else-if="!auth.isLoggedIn">
          <ButtonComponent variant="secondary">
            <NuxtLink to="/login">
              Login
            </NuxtLink>
          </ButtonComponent>
          <ButtonComponent variant="primary">
            <NuxtLink to="/">
              Sign Up
            </NuxtLink>
          </ButtonComponent>
        </template>

        <template v-else>
          <UserAvatar :is-dark="!scrolled" />
        </template>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  @reference "tailwindcss";
  @import "~/assets/css/forms.css";

  .nav-root {
    @apply flex justify-center text-white rounded-lg z-30 my-1 w-[calc(100%-8px)] left-1 transition-all;
  }

  .nav-root.show {
    @apply bg-white text-black;
  }

  .navbar {
    @apply flex justify-between w-full sm:px-3 sm:py-2 lg:px-6 lg:py-4 max-w-7xl;
  }

  .nav-group {
    @apply flex justify-between gap-3 items-center
  }

  .nav-item {
    @apply px-4 py-2 rounded-md transition-all cursor-pointer hover:bg-gray-200 hover:text-black;
  }
</style>