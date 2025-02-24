<script setup lang="ts">
import { Motion } from "motion-v";

const open = ref(false);

const links = [
  {
    label: "Dashboard",
    href: "#",
    icon: "i-heroicons-squares-2x2",
  },
  {
    label: "Profile",
    href: "#",
    icon: "i-heroicons-user",
  },
  {
    label: "Settings",
    href: "#",
    icon: "i-heroicons-cog-6-tooth",
  },
  {
    label: "Logout",
    href: "#",
    icon: "i-heroicons-arrow-right-on-rectangle",
  },
];
</script>

<template>
  <div class="rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen">
    <Sidebar v-model:open="open">
      <SidebarBody :open="open" @update:open="open = $event" class="justify-between gap-10">
        <div class="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div v-if="open" class="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
            <div class="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
            <Motion :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" class="font-medium text-black dark:text-white whitespace-pre"> Acet Labs </Motion>
          </div>
          <div v-else class="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
            <div class="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
          </div>
          <div class="mt-8 flex flex-col gap-2">
            <SidebarLink v-for="(link, idx) in links" :key="idx" :link="link" :open="open" />
          </div>
        </div>
        <div>
          <SidebarLink
            :link="{
              label: 'Manu Arora',
              href: '#',
              icon: 'img',
              img: 'https://assets.aceternity.com/manu.png',
            }"
            :open="open" />
        </div>
      </SidebarBody>
    </Sidebar>
    <div class="flex flex-1">
      <div class="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div class="flex gap-2">
          <div v-for="i in 4" :key="'first-array' + i" class="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse" />
        </div>
        <div class="flex gap-2 flex-1">
          <div v-for="i in 2" :key="'second-array' + i" class="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse" />
        </div>
      </div>
    </div>
  </div>
</template>
