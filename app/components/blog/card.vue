<script setup lang="ts">

</script>

<template>
  <article class="card-root">
    <div class="img-container">
        <img src="~/assets/images/public/card-cover.jpg" />
    </div>

    <div class="content">
        <div class="metadata">
            <span>Jan 30, 2025</span>
            <span>●</span>
            <span>10 min read</span>
        </div>

        <div class="details">
            <h2 class="title">Unveiling the secrets beyond the tourist trails</h2>
            <p class="text-base text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, aliquid suscipit iusto illo alias minus.</p>
        </div>

        <div class="mt-3">
            <UserAvatar />
        </div>
    </div>
  </article>
</template>

<style scoped>
   @reference 'tailwindcss';
   @reference '~/assets/css/app.css';

    .card-root {
        @apply max-w-96 max-h-[40rem] overflow-hidden rounded-lg;
    }

    .img-container {
        @apply size-full h-56 ;

    }

    .img-container img {
        @apply size-full object-cover;
    }

    .content {
        @apply py-2
    }

    .metadata {
        @apply mb-3
    }

    .metadata span {
        @apply text-sm text-gray-500 mr-2; 
    }
    
    .title {
        @apply text-xl font-semibold capitalize;
    }
</style>