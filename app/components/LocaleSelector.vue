<script setup lang="ts">
    withDefaults(
        defineProps<{ size?: number }>(), {
        size: 20
    });
</script> 

<template>
    <button class="flex gap-1 items-center cursor-pointer hover:bg-primary-hover px-2 py-1 rounded-full  hover:shadow-sm transition-all hover:text-black">
        <Icon name="ion:globe-outline" :size />
        <span>EN</span>
    </button>
</template>

<style scoped>
    @reference 'tailwindcss'
    @reference '~/assets/css/app.css';

</style>