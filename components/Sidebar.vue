<script setup lang="ts">
const props = defineProps<{
  open?: boolean;
}>();

const emit = defineEmits(["update:open"]);
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>
