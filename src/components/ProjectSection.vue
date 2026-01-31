<script setup>
  import Projects from './Projects.vue';
  const meusProjetos = [
  {
    id: 1,
    nome: 'Feira de Ciências',
    link: 'https://feira-ciencias.vercel.app',
    imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxJk_s8YDOuRnXjil_FLFudNi_k5s9ZMHg20W2nlh6bNxn6w-pIif9C9ClmLPOcpsGf1VX_ovDbyFIf0RRbLUEfj4NitUJqnRrtsHawECleI8U6gOV9VqOcXE1f5I6empoBD1CkSGI0CZWRARPQKdEDTpaWxfJP_iTB_DFhD5dgy_wVDYji1vUVOPZsWmBGR3GUSn4V7m4sP6ZlSCFKNTFR5Nz_pZX9oLe7bMS9-Wh3lo9mmiRVIZs_xOoRHrubzshWgppZJG3Y5si',
    descricao: 'Plataforma utilizada pela escola Estadual de Passa Tempo - MG para gerenciar a feira de ciências anual.',
    github: 'https://github.com/franciscojpaulo/feira-ciencias'
  },
  {
    id: 2,
    nome: 'Projeto Aysha',
    link: 'https://aysha.vercel.app',
    imagem: 'https://seusite.com/print-aysha.jpg',
    github: 'https://github.com/franciscojpaulo/feira-ciencias',
    descricao: 'Plataforma de e-commerce focada em produtos sustentáveis e ecológicos, promovendo um estilo de vida consciente.'
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
      <span class="text-slate-500 dark:text-slate-500 font-mono text-sm">Sort by: recent</span>
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