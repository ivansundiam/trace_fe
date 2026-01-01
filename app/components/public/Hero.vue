<script setup lang="ts">

</script>

<template>
    <div class="hero-root">
        <img src="~/assets/images/public/landing.jpg" class="hero-img" alt="hero">

        <div class="details">
            <div>
                <div class="px-4 py-1 rounded-full bg-gray-700/75 text-white w-fit">
                    Destination
                </div>
    
                <h1 class="title">Exploring the Wonders of Hiking</h1>
                <p class="sub-title">An iconic landmark, this post unveils the secrets that makes this destination a traveler's paradise.</p>
            </div>

            <div>
                <UserAvatar is-dark />

                <div class="flex gap-2 mt-3" > 
                    <span class="flex items-center gap-1">
                        <Icon name="ion:calendar-clear-outline" />
                        Dec 23, 2025
                    </span>
                    <span class="text-sm">●</span>
                    <span class="flex items-center gap-1">
                        <Icon name="ion:time-outline" />
                        10 min read
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @reference 'tailwindcss';

    .hero-root{
        @apply relative h-screen lg:min-h-auto lg:h-[75vh] flex w-full items-end object-center;

    }
    .hero-img {
        @apply object-cover size-full absolute object-center;
    }

    .details {
        @apply flex h-full gap-y-5 lg:items-end px-6 py-8 lg:px-10 lg:py-24 bg-linear-to-t from-gray-900/75 via-transparent to-gray-900/75 z-10 grow text-white flex-col lg:flex-row justify-end lg:justify-between;

        .title {
            @apply text-3xl lg:leading-16;
        }

        .sub-title {
            @apply text-lg max-w-[24rem];
        }
    }

</style>