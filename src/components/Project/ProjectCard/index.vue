<script setup>
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
  >
    <div class="w-full">
      <div class="flex justify-center items-center">
        <img :src="image" :alt="title" class="w-75" loading="lazy" />
      </div>
      <div class="flex items-center flex-wrap">
        <h3 class="dark:text-white text-black ease_dura text-md mr-2 mt-2">
          {{ title }}
        </h3>
        <div class="h-8 flex items-center">
          <span
            class="border-1 rounded text-sm dark:text-white text-black ease_dura h-4 leading-4 px-0.5 mr-2"
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
