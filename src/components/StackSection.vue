<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, FreeMode } from 'swiper/modules';
import Stack from './Stack.vue';
import StackMenu from './StackMenu.vue';

import 'swiper/css';
import 'swiper/css/free-mode';

const modules = [Autoplay, FreeMode];

const techNames = [
  'JavaScript',
  'Python',
  'Flask',
  'Vue.js',
  'PostgreSQL',
  'Redis',
  'Docker'
]
</script>

<template>
  <section class="px-6 md:px-20 py-24 bg-white dark:bg-background-dark overflow-hidden" id="stack">
    <div class="max-w-[1200px] mx-auto text-center">
      <span class="text-primary font-mono font-bold uppercase tracking-widest text-xs mb-4 block md:hidden">Capabilities</span>
      <StackMenu class="hidden md:block"/>
      <h2 class="text-slate-900 dark:text-white text-4xl md:text-5xl font-bold tracking-tight mb-16">The Tech Stack</h2>
      
      <div class="relative">
        <swiper
          :modules="modules"
          :slides-per-view="5"
          :space-between="5"
          :loop="true"
          :speed="5000"
          :allow-touch-move="false" 
          :autoplay="{
            delay: 0,
            disableOnInteraction: false,
          }"
          class="tech-swiper"
        >
          <swiper-slide v-for="tech in techNames" :key="tech" class="flex justify-center">
            <Stack :name="tech" />
          </swiper-slide>
        </swiper>


      </div>
      
    </div>
  </section>
</template>

<style>
.tech-swiper .swiper-wrapper {
  transition-timing-function: linear !important;
}

.tech-swiper .swiper-slide {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>