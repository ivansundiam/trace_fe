<script setup lang="ts">
    const categories = [
        { name: 'Newest', value: 'date_desc' },
        { name: 'Oldest', value: 'date_asc' },
        { name: 'Newest (A-Z)', value: 'name_desc' },
        { name: 'Oldest (A-Z)', value: 'name_asc' },
    ];

    const sort = defineModel<string>({ default: 'date_desc' });
</script>

<template>
  <div class="flex items-center whitespace-nowrap gap-3">
    Sort By: 
    <select v-model="sort" >
        <option v-for="item in categories" :value="item.value">
            {{ item.name }}
        </option>
    </select>
  </div>
</template>

<style scoped>
   @reference 'tailwindcss';
   @reference '~/assets/css/app.css';
   @import '~/assets/css/forms.css';

</style>