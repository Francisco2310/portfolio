<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import IconArrow from './icons/IconArrow.vue';

  const props = defineProps(['nome', 'github', 'link', 'imagem', 'descricao', 'video']);
  
  const videoRef = ref(null);

  let observer;
  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.value?.play();
        } else {
          if (videoRef.value) {
            videoRef.value.pause();
            videoRef.value.currentTime = 0;
            videoRef.value.load();
          }
        }
      });
    }, { 
      threshold: 0.7,
      rootMargin: "-10% 0px -10% 0px"
    });

    if (videoRef.value) observer.observe(videoRef.value);
  });

  onUnmounted(() => observer?.disconnect());
</script>

<template>
  <div class="group bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden transition-all hover:border-primary/30">
    
    <div class="relative overflow-hidden aspect-[16/9] bg-slate-100 dark:bg-slate-800">
      
      <video
        v-if="video"
        ref="videoRef"
        :src="video"
        :poster="imagem"
        muted
        loop
        playsinline
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      ></video>
      
      <div 
        v-else
        class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
        :style="`background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 50%), url(${imagem});`"
      ></div>
        <a aria-label="Abrir projeto em nova aba" class="absolute inset-0 z-10" target="_blank" :href="link">
        </a>
    </div>

    <div class="p-8">
      <h3 class="text-slate-900 dark:text-white text-2xl font-bold group-hover:text-primary transition-colors mb-4">{{ nome }}</h3>
      <p class="text-slate-500 dark:text-slate-400 mb-6 line-clamp-2 text-base">{{ descricao }}</p>
      
      <a class="text-primary font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2 hover:translate-x-1 transition-transform" target="_blank" :href="github">
        Repository <IconArrow class="size-5 fill-current" />
      </a>
    </div>
  </div>
</template>