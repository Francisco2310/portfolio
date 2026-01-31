<script setup>
import IconGithub from './icons/IconGithub.vue';
import CopiedButton from './CopiedButton.vue';
import { useCopyEmail } from '../composables/useCopyEmail';
const { mostrarToast, copiar } = useCopyEmail();
</script>


<template>
  <section class="px-6 md:px-20 py-32 md:py-48" id="contact">
<div class="max-w-[1200px] mx-auto text-center @container">
<div class="flex flex-col items-center gap-10">
<h2 class="text-slate-900 dark:text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-[900px]">
                    Ready to scale <span class="text-outline italic">your next project?</span>
</h2>
<p class="text-slate-600 dark:text-slate-400 text-xl font-light max-w-xl">
                    Scaling roadmaps into high-performance systems. I’m ready to deploy clean architecture and rapid execution to your next challenge.
                </p>
<div class="flex flex-col md:flex-row gap-6 items-center mt-4">
<a @click="copiar" class="group flex min-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-16 px-8 bg-primary text-background-dark text-lg font-bold transition-all hover:shadow-[0_0_30px_rgba(43,173,238,0.4)]" href="mailto:franciscoluis05.fl@gmail.com">
<span class="truncate">Mail me!</span>
</a>
<div class="flex gap-8 items-center text-slate-500 dark:text-slate-400 font-medium">
<a class="hover:text-primary transition-colors flex items-center gap-2" href="https://github.com/Francisco2310" target="_blank" rel="noopener noreferrer"> GitHub</a>
<a class="hover:text-primary transition-colors flex items-center gap-2" href="https://www.linkedin.com/in/franciscolribeiro/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
</div>
</div>
</div>
</div>
</section>

<Transition name="fade">
  <CopiedButton v-if="mostrarToast" />
</Transition>
</template>