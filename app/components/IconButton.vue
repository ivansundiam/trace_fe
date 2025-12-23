<script setup lang="ts">
    defineProps<{ icon: string }>();
</script>

<template>
  <div class="p-3 rounded-full bg-[#323232] cursor-pointer flex items-center justify-center hover:bg-[#444444]">
    <Icon :name="icon" size="20" />
  </div>
</template>

<style scoped>

</style>