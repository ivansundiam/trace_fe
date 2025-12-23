<script setup lang="ts">
</script>

<template>
  <nav class="nav-root">
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

      <div class="nav-group">
        <LocaleSelector />
        <ButtonComponent type="secondary">Login</ButtonComponent>
        <ButtonComponent type="primary">Sign Up</ButtonComponent>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  @reference "tailwindcss";

  .nav-root {
    @apply flex justify-center bg-white;
  }

  .navbar {
    @apply max-w-7xl flex justify-between w-full sm:px-6 sm:py-2 lg:px-8 lg:py-4
  }

  .nav-group {
    @apply flex justify-between gap-3 items-center
  }

  .nav-item {
    @apply px-4 py-2 rounded-md transition-all cursor-pointer hover:bg-gray-200
  }
</style>