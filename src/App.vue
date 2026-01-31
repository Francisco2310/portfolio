<script setup>
import Hero from './components/Hero.vue'
import Header from './components/Header.vue';
import ProjectSection from './components/ProjectSection.vue';
import StackSection from './components/StackSection.vue';
</script>

<template>
  <Header />
  <main class="pt-24">
    <Hero />
    <ProjectSection />
    <StackSection />
  </main>
</template>