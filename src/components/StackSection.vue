<script setup>
import Stack from './Stack.vue'

const techNames = [
  'JavaScript',
  'Python',
  'Vue.js',
  'PostgreSQL',
  'Redis',
  'Flask',
  'Docker'
]

</script>

<template>
  <section class="px-6 md:px-20 py-24 bg-white dark:bg-background-dark" id="stack">
    <div class="max-w-[1200px] mx-auto text-center">
      <span class="text-primary font-mono font-bold uppercase tracking-widest text-xs mb-4 block">Capabilities</span>
      <h2 class="text-slate-900 dark:text-white text-4xl md:text-5xl font-bold tracking-tight mb-16">The Tech Stack</h2>
      
      <div class="flex flex-wrap justify-center gap-8 md:gap-24">
        <Stack v-for="tech in techNames" :key="tech" :name="tech" />
      </div>
      
    </div>
  </section>
</template>