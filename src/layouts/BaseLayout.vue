<script setup>
defineOptions({
  name: "Layout",
});
</script>

<template>
  <div
    class="lg:px-[20%] md:px-[15%] pb-[5%] sm:px-[10%] xs:px-[5%] px-[15px] min-w-[300px]"
  >
    <slot></slot>
  </div>
</template>
