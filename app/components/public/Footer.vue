<script setup lang="ts">
  const year = new Date().getFullYear();
</script>

<template>
  <div class="footer-root">
    <div class="footer-content">
      <div class="flex justify-between [&>div]:max-w-82 gap-10">
        <div>
          <AppLogo />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid, maxime quis eius inventore odit amet
          hic, unde optio beatae perspiciatis distinctio labore ex error.
        </div>

        <div class="[&>a]:hover:text-white flex flex-col gap-4">
          <a>Home</a>
          <a>About</a>
          <a>Contact Us</a>
          <a>Articles</a>
        </div>

        <div>
          <p class="text-white">Get Updates</p>
          <div class="relative">
            <input type="text" placeholder="Enter your email" class="dark pr-30!">

            <div class="absolute right-1.5 top-1/2 -translate-y-1/2">
              <ButtonComponent type="primary" text="Subscribe" size="sm" />
            </div>
          </div>

          <div class="my-3 flex gap-3 justify-between">
            <IconButton icon="ion:logo-instagram" />
            <IconButton icon="ion:logo-x" />
            <IconButton icon="ion:logo-facebook" />
            <IconButton icon="ion:logo-discord" />
            <IconButton icon="ion:logo-tiktok" />
          </div>
        </div>
      </div>

      <div class="flex justify-between text-white mt-9">
        <span>&copy;{{ year }} Trace. All rights reserved.</span>
        <div class="flex gap-3">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @reference "tailwindcss";
  @reference "~/assets/css/app.css";
  @import "~/assets/css/forms.css";

  .footer-root {
    @apply bg-primary-dark px-8 py-6 rounded-lg;
  }

  .footer-content {
    @apply flex flex-col max-w-7xl mx-auto text-gray-300;
  }
</style>