<script setup lang="ts">
  withDefaults(
      defineProps<{
        text?: string;
        variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark';
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        width?: string; // accepts tailwind widths
        radius?: 'sm' | 'md' | 'lg' | 'full'
      }>(), {
        variant: 'secondary',
        size: 'md',
        radius: "md",
        width: 'auto'
      }
  )
</script>

<template>
  <button :class="['btn', `btn-${variant} rounded-${radius} w-${width}`, size]">
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