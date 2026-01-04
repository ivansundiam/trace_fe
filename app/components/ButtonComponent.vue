<script setup lang="ts">
  withDefaults(
      defineProps<{
        text?: string;
        variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark';
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        width?: string; // accepts tailwind widths
        radius?: 'sm' | 'md' | 'lg' | 'full'
        submit?: boolean,
        loading?: boolean
      }>(), {
        variant: 'secondary',
        size: 'md',
        radius: "md",
        width: 'auto',
        submit: false,
        loading: false,
      }
  )
</script>

<template>
  <button :type="submit ? 'submit' : 'button'" 
    :disabled="loading"
    :class="['btn', `btn-${variant} rounded-${radius} w-${width}`, size]">
    <Icon v-if="loading" name="ion:load-c" :size="24" class="animate-spin" />
    <span v-else-if="text">{{ text }}</span>
    <slot v-else ></slot>
  </button>
</template>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/app.css";

  .btn {
    @apply flex items-center justify-center;
  }

  .sm {
    @apply px-3 py-1;
  }

  .md {
    @apply  px-4 py-2;
  }

</style>