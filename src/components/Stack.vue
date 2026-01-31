<script setup>
import { computed } from 'vue'
import IconJS from './icons/IconJS.vue'
import IconPython from './icons/IconPython.vue'
const props = defineProps(['name'])

const iconComponent = computed(() => {
  const icons = {
    'JavaScript': IconJS,
    'Python': IconPython,
  }
  return icons[props.name] || IconJS 
})
</script>

<template>
  <div class="flex flex-col items-center gap-4 group">
    <div class="size-16 flex items-center justify-center bg-slate-50 dark:bg-card-dark rounded-xl border border-slate-200 dark:border-white/5 group-hover:border-primary/50 transition-all duration-300">
      <component :is="iconComponent" class="size-4 fill-current text-slate-600 dark:text-slate-400 group-hover:text-primary" />
    </div>
    <span class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ name }}</span>
  </div>
</template>