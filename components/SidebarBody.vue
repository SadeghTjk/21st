<script setup lang="ts">
import { Motion } from "motion-v";

const props = defineProps<{
  class?: string;
  open?: boolean;
}>();

const emit = defineEmits(["update:open"]);

const isOpen = computed({
  get: () => props.open ?? false,
  set: (value) => emit("update:open", value),
});

const desktopWidth = computed(() => {
  return {
    width: isOpen.value ? "300px" : "60px",
  };
});
</script>

<template>
  <!-- Desktop Sidebar -->
  <Motion :class="['h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 flex-shrink-0 w-16', props.class]" :initial="{ width: '60px' }" :animate="desktopWidth" :transition="{ duration: 0.35 }" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <slot></slot>
  </Motion>

  <!-- Mobile Sidebar -->
  <div class="h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full">
    <div class="flex justify-end z-20 w-full">
      <Icon name="heroicons:bars-3" class="text-neutral-800 dark:text-neutral-200 cursor-pointer w-6 h-6" @click="isOpen = !isOpen" />
    </div>
    <Motion
      v-if="isOpen"
      :initial="{ x: '-100%', opacity: 0 }"
      :animate="{ x: 0, opacity: 1 }"
      :exit="{ x: '-100%', opacity: 0 }"
      :transition="{
        duration: 0.3,
        ease: 'easeInOut',
      }"
      :class="['fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between', props.class]">
      <div class="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200 cursor-pointer" @click="isOpen = false">
        <Icon name="heroicons:x-mark" class="w-6 h-6" />
      </div>
      <slot></slot>
    </Motion>
  </div>
</template>
