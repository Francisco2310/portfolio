<script setup>
import Hero from './components/Hero.vue'
import Header from './components/Header.vue';
import ProjectSection from './components/ProjectSection.vue';
import StackSection from './components/StackSection.vue';
import ContactSection from './components/ContactSection.vue';
import Footer from './components/Footer.vue';
import CopiedButton from './components/CopiedButton.vue';
</script>

<template>
  <Header />
  <main class="pt-24">
    <Hero />
    <ProjectSection />
    <StackSection />
    <ContactSection />
  </main>
  <Footer />
</template>