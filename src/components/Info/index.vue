<script setup>
import { onMounted } from "vue";
import meta from "@/config.json";

defineOptions({
  name: "Info",
});

onMounted(() => {
  document.title =
    meta.seo?.title ||
    [meta.profile.name, meta.profile.title].filter(Boolean).join(" - ");
});
</script>

<template>
  <div
    class="mt-20 text-[#121314] dark:text-white ease_dura font-[Cute] font-400"
  >
    <h1 class="sm:text-5xl text-4xl">{{ meta.greet }}</h1>
    <h2 class="sm:text-4xl text-3xl mt-4">I'm {{ meta.profile.name }}.</h2>
  </div>

  <div class="mt-4 list-none">
    <ul>
      <li
        class="list-none font-[Cute] font-light text-2xl text-[#121314] dark:text-white ease_dura"
        v-for="text in meta.profile.desc"
      >
        {{ text }}
      </li>
    </ul>
  </div>

  <div v-if="meta.skills && meta.skills.length" class="mt-4 flex flex-wrap gap-2">
    <span
      v-for="skill in meta.skills"
      :key="skill"
      class="border-1 rounded-md px-2 py-0.5 text-sm font-500 font-[Cute] dark:text-gray-300 text-gray-700 dark:border-gray-700 border-gray-300 dark:bg-[#252526] bg-[#f0f1f2]"
    >
      {{ skill }}
    </span>
  </div>
</template>
