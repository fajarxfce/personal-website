<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

defineOptions({
  name: "ContactItem",
});

let { item, index, currentIndex, onToggle, onClick } = defineProps({
  item: Object,
  index: Number,
  currentIndex: Number,
  onToggle: Function,
  onClick: Function,
});

const { text, icon, link, color, desc } = item;

const iconBgColor = ref("");
const handleMouseOver = (val) => (iconBgColor.value = val);
const handleMouseLeave = (val) => (iconBgColor.value = val);
</script>

<template>
  <a
    class="contact_item hover:text-[#fff]"
    target="_blank"
    :href="link"
    :style="{ backgroundColor: iconBgColor }"
    @mouseover="() => handleMouseOver(color || '')"
    @mouseleave="() => handleMouseLeave('')"
    @click="onToggle ? onToggle?.(index) : onClick?.()"
  >
    <Icon :icon="icon" :width="icon.includes('skull') ? 19 : 22" />
    <span v-if="desc" class="ml-1 text-sm">{{ desc }}</span>
  </a>
  <template v-if="!link">
    <div
      v-show="index === currentIndex"
      class="text-sm dark:text-white text-black ease_dura mt-1 w-1 text-gray-text"
    >
      {{ text }}
    </div>
  </template>
</template>
