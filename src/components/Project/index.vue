<script setup>
import { Icon } from "@iconify/vue";
import meta from "@/config.json";

import ProjectCard from "./ProjectCard/index.vue";

defineOptions({
  name: "Project",
});
</script>

<template>
  <div class="mt-5">
    <div class="flex">
      <h2
        class="font-[Cute] mt-5 dark:text-white text-black ease_dura text-3xl"
      >
        Projects
      </h2>
      <span class="flex-1"></span>
      <a
        :href="`https://github.com/${meta.profile.github}`"
        target="_blank"
        class="decoration-none text-gray-7"
      >
        <Icon icon="akar-icons:arrow-up-right" width="30" class="mt-5" />
      </a>
    </div>
    <div class="flex flex-wrap justify-between">
      <ProjectCard
        v-for="item of meta.projects"
        :title="item.title"
        :description="item.description"
        :link="item.link"
        :image="item.image"
        :tags="item.tags"
      />
    </div>
  </div>
</template>
