<script setup>
  defineProps(['nome', 'github', 'link', 'imagem', 'descricao']);
</script>



<template>
  <div class="group bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden transition-all hover:border-primary/30">
  <div class="relative overflow-hidden aspect-[16/9]">
  <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Microservices dashboard screenshot" :style="`background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 50%), url(${imagem});`">
  </div>
  <div class="absolute top-4 right-4 flex gap-2">
  <a class="p-2 bg-background-dark/80 backdrop-blur-md rounded-lg text-white hover:text-primary transition-colors shadow-lg" target="_blank" :href="`${link}`">
  <span class="material-symbols-outlined text-lg">link</span>
  </a>
  </div>
  </div>
  <div class="p-8">
  <div class="flex justify-between items-center mb-4">
  <h3 class="text-slate-900 dark:text-white text-2xl font-bold group-hover:text-primary transition-colors">{{ nome }}</h3>
  </div>
  <p class="text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">{{ descricao }}</p>
  <div class="flex flex-wrap items-center justify-between gap-4">
  <div class="flex gap-3">
  </div>
  </div>
  <a class="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:translate-x-1 transition-transform" target="_blank" :href="`${github}`">
                                  Repository <span class="material-symbols-outlined text-sm">arrow_outward</span>
  </a>
  </div>
  </div>

</template>