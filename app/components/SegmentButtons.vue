<script setup lang="ts">
  export interface SegmentButton {
    name: string;
    value: any;
    icon?: string;
  }

  defineProps<{
    items: SegmentButton[];
  }>();

  const model = defineModel<any>();

  const select = (item: SegmentButton) => {
    model.value = item.value
  }
</script>

<template>
  <div class="flex gap-x-3">
    <button v-for="item in items" 
      :key="item.value"
      @click="select(item)"
      class="btn btn-secondary"
      :class="{'selected': item.value === model}">
      <Icon v-if="item.icon" :name="item.icon" />
      {{ item.name }}
    </button>
  </div>
</template>

<style scoped>
   @reference 'tailwindcss';
   @reference '~/assets/css/app.css';

    .selected {
    @apply bg-primary-active;
  }
</style>