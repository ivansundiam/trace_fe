<script setup lang="ts">
  withDefaults(
      defineProps<{
        text?: string;
        type: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        theme?: 'light' | 'dark'
        radius?: 'sm' | 'md' | 'lg' | 'full'
      }>(), {
        size: 'md',
        theme: 'light',
        radius: "md"
      }
  )
</script>

<template>
  <button :class="['btn-root', type, size, theme, `rounded-${radius}`]">
    <span v-if="text">{{ text }}</span>
    <slot v-else ></slot>
  </button>
</template>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/app.css";

  .btn-root {
    @apply rounded-md bg-primary transition-all hover:bg-primary-hover active:bg-primary-active text-black cursor-pointer;
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

  .sm {
    @apply px-3 py-1;
  }

  .md {
    @apply  px-4 py-2;
  }

</style>