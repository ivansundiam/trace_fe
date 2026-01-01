<script setup lang="ts">
    const show = defineModel<boolean>();
    withDefaults(
        defineProps<{ size?: number }>(), {
            size: 24
        }
    )
</script>

<template>
  <button type="button" 
    @click="show = !show" 
    class="text-gray-500 focus:outline-none cursor-pointer">
    <Icon :name="show ? 'ion:eye' : 'ion:eye-off'" :size />
  </button>
</template>

<style scoped>

</style>