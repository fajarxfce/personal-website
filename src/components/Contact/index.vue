<script setup>
import { ref } from "vue";
import meta from "@/config.json";
import ContactItem from "./ContactItem/index.vue";
import { useDark, useToggle } from "@vueuse/core";
import { Icon } from "@iconify/vue";

defineOptions({
  name: "Contact",
});

const items = meta.contacts;

let currentIndex = ref(-1);
const toggle = (index) => {
  if (currentIndex.value === index) {
    currentIndex.value = -1;
  } else {
    currentIndex.value = index;
  }
};

const isDark = useDark();

const handleClick = () => {
  const toggleDark = useToggle(isDark);
  toggleDark();
};
</script>

<template>
  <ul class="flex flex-wrap list-none mt-5">
    <li
      v-for="(item, index) of items"
      :key="item.icon"
      class="font-[Cute] mr-2 mt-2 h-10 relative"
    >
      <ContactItem
        :item="item"
        :currentIndex="currentIndex"
        :index="index"
        :onToggle="toggle"
      />
    </li>
    <li class="font-[Cute] mr-2 mt-2 h-10 relative">
      <a class="contact_item ease_dura" @click="handleClick">
        <Icon
          v-if="isDark"
          icon="lucide:sun"
          :width="22"
          class="ease_dura text-yellow-400"
        />
        <Icon
          v-else
          icon="lucide:moon"
          :width="22"
          class="ease_dura text-blue-400"
        />
      </a>
    </li>
  </ul>
</template>
