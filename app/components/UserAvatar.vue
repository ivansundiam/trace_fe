<script setup lang="ts">
    withDefaults(
        defineProps<{
            isDark?: boolean
        }>(), {
            isDark: false
        }
    );
</script>

<template>
    <div class="flex items-center gap-3" :class="isDark ? 'text-white' : 'text-primary-dark'">
        <div class="size-10 rounded-full overflow-hidden bg-gray-500">
            <img src="~/assets/images/public/profile-pic.jpg" class="size-full object-cover" alt="profile-pic" />
        </div>
        <p class="text-lg">Theodore Reginald</p>
    </div>
</template>

<style scoped>
    @reference 'tailwindcss';
    @reference '~/assets/css/app.css';

</style>