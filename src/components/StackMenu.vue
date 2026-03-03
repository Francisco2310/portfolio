<script setup>
import Stack from './Stack.vue'
import IconArrow from './icons/IconArrow.vue';

const techNames = [
  'JavaScript',
  'Python',
  'Flask',
  'Vue.js',
  'PostgreSQL',
  'Redis',
  'Docker'
]

import { ref } from 'vue'

const isVisible = ref(false)
const position = ref({ x: 0, y: 0 })

const updatePosition = (event) => {
  position.value = { 
    x: event.clientX + 20, 
    y: event.clientY + 20 
  }
}

</script>


<template>
<div 
  @mouseenter="isVisible = true" 
  @mouseleave="isVisible = false"
  @mousemove="updatePosition"
  class="text-primary font-mono font-bold uppercase tracking-widest text-xs mb-4 block cursor-pointer "
>capabilities<IconArrow class="size-4 fill-current mr-2 inline" /></div>

<div 
  v-if="isVisible"
  :style="{ left: position.x + 'px', top: position.y + 'px' }"
  class="fixed z-[999] pointer-events-none w-[400px] bg-[#0a0a0a]/30 border border-[#1a1a1a] rounded-lg p-6 shadow-2xl backdrop-blur-md font-['Manrope'] animate-in fade-in zoom-in duration-150"
>
  
  <div class="flex justify-between items-center mb-6 border-b border-[#1a1a1a] pb-3">
    <div class="flex items-center gap-2">
      <span class="size-2 bg-primary rounded-full"></span>
      <span class="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">System Inventory</span>
    </div>
  </div>

  <div class="flex flex-wrap justify-center gap-4">
    <Stack 
      v-for="tech in techNames" 
      :key="tech" 
      :name="tech" 
    />
  </div>

  <div class="mt-6 pt-3 border-t border-[#1a1a1a] flex justify-between items-center">
    <span class="text-[9px] font-mono text-slate-500 uppercase">1/1 Slots Used</span>
    <div class="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
  </div>
</div>
</template>