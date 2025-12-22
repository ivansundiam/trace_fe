<script setup lang="ts">
  withDefaults(
      defineProps<{ size?: number }>(), {
        size: 32
      }
  );
</script>

<template>
  <NuxtLink to="/" class="flex items-center gap-1 max-w-64">
    <Icon name="ion:compass-outline" :size /> <span class="text-lg font-bold">Trace</span>
  </NuxtLink>
</template>

<style scoped>

</style>