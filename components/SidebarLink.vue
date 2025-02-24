<script setup lang="ts">
import { Motion, AnimatePresence } from "motion-v";

interface Link {
  label: string;
  href: string;
  icon: string;
  img?: string;
}

const props = defineProps<{
  link: Link;
  class?: string;
  open?: boolean;
}>();
</script>

<template>
  <NuxtLink :to="'/' + props.open" :class="['flex relative items-center justify-start gap-2 group/sidebar py-2', props.class]">
    <img v-if="props.link.img" :src="props.link.img" class="w-6 h-6 rounded-full" />
    <Icon v-else :name="props.link.icon" size="24" class="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
    <AnimatePresence>
      <Motion
        v-show="props.open"
        :initial="{
          opacity: 0,
        }"
        :animate="{
          opacity: 1,
        }"
        :exit="{
          opacity: 0,
        }"
        :transition="{
          duration: 0.35,
          damping: 50,
          ease: 'easeInOut',
        }"
        class="absolute left-8 text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 duration-300 transition-transform whitespace-pre !p-0 !m-0">
        {{ props.link.label }}
      </Motion>
    </AnimatePresence>
  </NuxtLink>
</template>
