<script setup>
  import Projects from './Projects.vue';
  const meusProjetos = [
  {
    id: 1,
    nome: 'Feira de Ciências',
    link: 'https://feira-gray.vercel.app',
    imagem: 'projects/Sciencefair.webp',
    descricao: 'Science Fair showcase site featuring a serverless comment system via GitHub API and dynamic particle animations.',
    github: 'https://github.com/Francisco2310/Feira'
  },
  {
    id: 2,
    nome: 'Couple Site',
    link: 'https://site-aysha.vercel.app',
    imagem: 'projects/couplesite.webp',
    github: 'https://github.com/Francisco2310/siteAysha',
    descricao: 'Artistic focused site made for a gift to a couple, featuring animations and responsive design.'
  }
]

</script>

<template>
  <section class="px-6 md:px-20 py-24 bg-slate-50 dark:bg-[#080808]" id="work">
      <div class="max-w-[1200px] mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
      <div>
      <span class="text-primary font-mono font-bold uppercase tracking-widest text-xs mb-2 block">/bin/projects</span>
      <h2 class="text-slate-900 dark:text-white text-4xl md:text-5xl font-bold tracking-tight">Technical Portfolio</h2>
      </div>
      <div class="flex items-center gap-4">
      </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Projects v-for="projeto in meusProjetos" 
          :key="projeto.id"
          :nome="projeto.nome"
          :link="projeto.link"
          :imagem="projeto.imagem"
          :descricao="projeto.descricao"
          :github="projeto.github"/>
      </div>
      </div>
    </section>
</template>