<script setup>
  import CheckCircle from './icons/CheckCircle.vue';
</script>


<template>
  <div class="fixed bottom-8 left-8 z-[100] flex items-center gap-3 rounded-lg border border-white/10 bg-[#1e1e1e] px-5 py-4 shadow-2xl">
  <CheckCircle class="size-5 fill-primary" />
  <span class="text-sm font-medium text-white">Email copied to clipboard!</span>
  </div>
</template>