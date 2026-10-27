<script setup>
import meta from "@/config.json";

defineOptions({
  name: "ProjectCard",
});

defineProps({
  title: String,
  description: String,
  logo: String,
  image: String,
  link: String,
  tags: Object,
});
</script>

<template>
  <a
    class="block rounded-md dark:bg-[#373738] bg-[#f5f6f7] dark:hover:bg-[#4c4c4c] hover:bg-[#eeeeee] xl:w-[46%] w-[100%] ease_dura p-3 mt-5 flex font-[Cute] cursor-pointer decoration-none op-90"
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="w-full">
      <div class="flex justify-center items-center">
        <img
          :src="image"
          :alt="`${title} - ${meta.profile.name} portfolio (${tags?.join(', ') || ''})`"
          class="w-75 max-w-full h-96 object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="flex flex-col items-start">
        <h3 class="dark:text-white text-black ease_dura text-md mr-2 mt-2">
          {{ title }}
        </h3>
        <div class="min-h-8 flex flex-wrap items-center gap-1">
          <span
            class="border-1 rounded text-sm dark:text-white text-black ease_dura min-h-4 leading-4 px-0.5"
            v-for="tag of tags"
            >{{ tag }}</span
          >
        </div>
      </div>
      <p class="dark:text-white text-black ease_dura text-sm mt-2">
        {{ description }}
      </p>
    </div>
  </a>
</template>
