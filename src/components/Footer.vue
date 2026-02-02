<script setup>
import IconBacktoTop from './icons/IconBacktoTop.vue';

</script>

<template>
  <footer class="px-6 md:px-20 py-12 border-t border-slate-200 dark:border-white/5">
<div class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div class="flex items-center gap-4 text-slate-400 text-sm font-mono">
<span>© 2026 Francisco Ribeiro</span>

</div>
<div class="flex gap-10">

<button class="text-primary hover:text-white transition-colors flex items-center gap-1" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<IconBacktoTop class="size-6 fill-current mr-2" />
<span class="text-xs uppercase tracking-widest font-bold font-mono">Back to Top</span>
</button>
</div>
</div>
</footer>
</template>