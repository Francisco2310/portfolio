<script setup>
import Hero from './components/Hero.vue'
import Header from './components/Header.vue';
import ProjectSection from './components/ProjectSection.vue';
import StackSection from './components/StackSection.vue';
import ContactSection from './components/ContactSection.vue';
import Footer from './components/Footer.vue';
import CopiedButton from './components/CopiedButton.vue';
import StackSectionMobile from './components/StackSectionMobile.vue';
import Stack from './components/Stack.vue';
</script>

<template>
  <Header />
  <main class="pt-24">
    <Hero />
    <ProjectSection />
    <StackSectionMobile class="block md:hidden" />
    <StackSection class="hidden md:block" />
    <ContactSection />
  </main>
  <Footer />
</template>