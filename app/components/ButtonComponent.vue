<script setup lang="ts">
  withDefaults(
      defineProps<{
        text?: string;
        variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark';
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        radius?: 'sm' | 'md' | 'lg' | 'full'
      }>(), {
        variant: 'secondary',
        size: 'md',
        radius: "md",
      }
  )
</script>

<template>
  <button :class="['btn', `btn-${variant}`, size, `rounded-${radius}`]">
    <span v-if="text">{{ text }}</span>
    <slot v-else ></slot>
  </button>
</template>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/app.css";

  .sm {
    @apply px-3 py-1;
  }

  .md {
    @apply  px-4 py-2;
  }

</style>