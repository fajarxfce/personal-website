<script setup>
import { Icon } from "@iconify/vue";

defineOptions({
  name: "Resume",
});
</script>

<template>
  <div class="mt-5">
    <div class="flex">
      <h2
        class="font-[Cute] mt-5 dark:text-white text-black ease_dura text-3xl"
      >
        Resume
      </h2>
      <span class="flex-1"></span>
      <a
        href="https://www.cake.me/bayu-rifki-alghifari"
        target="_blank"
        class="decoration-none text-gray-7"
      >
        <Icon icon="akar-icons:arrow-up-right" width="30" class="mt-5" />
      </a>
    </div>
    <div class="flex flex-wrap justify-between">
      <a
        href="https://www.cake.me/bayu-rifki-alghifari"
        target="_blank"
        class="dark:text-white text-black ease_dura decoration-none mt-5 rounded-md bg-[#f5f6f7] dark:bg-[#373738] hover:bg-[#07c160] hover:text-[#fff] p-3 font-[Cute] text-lg border-2 font-500 cursor-pointer"
      >
        Download Resume
      </a>
    </div>
  </div>
</template>
