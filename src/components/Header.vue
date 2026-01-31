<script setup>
import CopiedButton from './CopiedButton.vue';
import { useCopyEmail } from '../composables/useCopyEmail';
const { mostrarToast, copiar } = useCopyEmail();
</script>

<template>
<header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-solid border-slate-200 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
<div class="flex items-center gap-3">
<div class="size-6 text-primary">
</div>
<h2 class="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] font-mono">&lt;FR /&gt;</h2>
</div>
<div class="flex flex-1 justify-end gap-12">
<nav class="hidden md:flex items-center gap-10">
<a class="hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="#stack">Stack</a>
<a class="hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="#work">Projects</a>
<a class="hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="#contact">Contact</a>
</nav>
<button @click="copiar" class="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-background-dark text-sm font-extrabold transition-transform active:scale-95">
                    GET IN TOUCH
                </button>
</div>
</header>

<Transition name="fade">
  <CopiedButton v-if="mostrarToast" />
</Transition>
</template>