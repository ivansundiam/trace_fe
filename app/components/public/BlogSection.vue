<script setup lang="ts">
  import type { SegmentButton } from '../SegmentButtons.vue';

  const segmentButtons: SegmentButton[] = [
    { name: 'All', value: 'all', },
    { name: 'Destination', value: 'destination', },
    { name: 'Culinary', value: 'culinary', },
    { name: 'Lifestyle', value: 'lifestyle', },
    { name: 'Tips & Hacks', value: 'tips', },
  ];

  const selectedTab = ref<string>('all');
  const sort = ref<string>('date_desc');

</script>

<template>
  <div class="max-w-7xl mx-auto py-8">
    <h1 class="title">Blog</h1>
    <p>Here, we share travel tips, destination guides, and stories that inspire youre next adventure.</p>

    <div class="my-3 flex justify-between">
      <SegmentButtons :items="segmentButtons" v-model="selectedTab"  />

      <SortBy v-model="sort" />
    </div>
  </div>
</template>

<style scoped>
  @reference 'tailwindcss';
  /* @reference '~/assets/css/app.css'; */

  .title {
    @apply text-2xl md:text-3xl;
  }

</style>