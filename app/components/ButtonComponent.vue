<script setup lang="ts">
  withDefaults(
      defineProps<{
        text?: string;
        variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark';
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        radius?: 'sm' | 'md' | 'lg' | 'full'
      }>(), {
        size: 'md',
        radius: "md"
      }
  )
</script>

<template>
  <button :class="['btn-root', variant, size, `rounded-${radius}`]">
    <span v-if="text">{{ text }}</span>
    <slot v-else ></slot>
  </button>
</template>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/app.css";

  .btn-root {
    @apply rounded-md bg-primary transition-all hover:bg-primary-hover active:bg-primary-active cursor-pointer;
  }


  /* variants */
  .primary {
    @apply bg-primary hover:bg-primary-hover active:bg-primary-active text-black;
  }

  .secondary {
    @apply bg-transparent hover:bg-primary-hover active:bg-primary-active text-inherit hover:text-black;
  }

  .success {
    @apply bg-success hover:bg-success-hover active:bg-success-active;
  }

  .danger {
    @apply bg-danger hover:bg-danger-hover active:bg-danger-active;
  }

  .warning {
    @apply bg-warning hover:bg-warning-hover active:bg-warning-active;
  }
  
  .dark {
    @apply bg-primary-dark hover:bg-primary-dark-hover active:bg-primary-dark-active text-white;
  }

  /* sizes */

  .sm {
    @apply px-3 py-1;
  }

  .md {
    @apply  px-4 py-2;
  }

</style>