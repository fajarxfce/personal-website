<template>
  <div
    class="bg-white dark:bg-[#212121] ease_dura fixed top-0 bottom-0 left-0 right-0 pointer-events-none"
    style="z-index: -1"
  >
    <canvas ref="el" width="400" height="400" />
  </div>
</template>

<script setup>
import { useRafFn, useWindowSize } from "@vueuse/core";
import { ref, reactive, onMounted } from "vue";

defineOptions({
  name: "Plum",
});

const r180 = Math.PI;
const r90 = Math.PI / 2;
const r15 = Math.PI / 12;
const color = "#88888825";

const el = ref(null);

const { random } = Math;
const size = reactive(useWindowSize());

const start = ref(() => {});
const init = ref(4);
const len = ref(6);
const stopped = ref(false);

function initCanvas(canvas, width = 400, height = 400, _dpi = 1) {
  const ctx = canvas.getContext("2d");

  const dpr = window.devicePixelRatio || 1;
  const bsr =
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1;

  const dpi = _dpi || dpr / bsr;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = dpi * width;
  canvas.height = dpi * height;
  ctx.scale(dpi, dpi);

  return { ctx, dpi };
}

function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
  const dx = r * Math.cos(theta);
  const dy = r * Math.sin(theta);
  return [x + dx, y + dy];
}

onMounted(async () => {
  const canvas = el.value;
  const { ctx } = initCanvas(canvas, size.width, size.height);
  const { width, height } = canvas;

  let steps = [];
  let prevSteps = [];

  let iterations = 0;

  const step = (x, y, rad) => {
    const length = random() * len.value;

    const [nx, ny] = polar2cart(x, y, length, rad);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(nx, ny);
    ctx.stroke();

    const rad1 = rad + random() * r15;
    const rad2 = rad - random() * r15;

    if (
      nx < -100 ||
      nx > size.width + 100 ||
      ny < -100 ||
      ny > size.height + 100
    )
      return;

    if (iterations <= init.value || random() > 0.5)
      steps.push(() => step(nx, ny, rad1));
    if (iterations <= init.value || random() > 0.5)
      steps.push(() => step(nx, ny, rad2));
  };

  let lastTime = performance.now();
  const interval = 1000 / 40;

  let controls;

  const frame = () => {
    if (performance.now() - lastTime < interval) return;

    iterations += 1;
    prevSteps = steps;
    steps = [];
    lastTime = performance.now();

    if (!prevSteps.length) {
      controls.pause();
      stopped.value = true;
    }
    prevSteps.forEach((i) => i());
  };

  controls = useRafFn(frame, { immediate: false });

  start.value = () => {
    controls.pause();
    iterations = 0;
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    prevSteps = [];
    steps = [
      () => step(random() * size.width, 0, r90),
      () => step(random() * size.width, size.height, -r90),
      () => step(0, random() * size.height, 0),
      () => step(size.width, random() * size.height, r180),
    ];
    if (size.width < 500) steps = steps.slice(0, 2);
    controls.resume();
    stopped.value = false;
  };

  start.value();
});
</script>
