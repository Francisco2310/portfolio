<script setup>
import IconGithub from './icons/IconGithub.vue'
const name = "Francisco Ribeiro"
const role = "Full Stack Dev"
const bio = "Specialized in building high-performance full-stack applications that help businesses scale. I focus on delivering robust, production-ready code that prioritizes your project's success."
const subtitle = "Turning Your Ideas into Scalable Digital Products."
</script>

<template>
  <section class="px-6 md:px-20 py-20 md:py-32">
    <div class="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <div class="flex flex-col gap-6 items-start">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          System: Online
        </div>
        
        <h1 class="text-slate-900 dark:text-white text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter">
          {{ name }} <br/>
          <span class="text-primary">{{ role }}</span><br/>
          <span class="text-slate-400 dark:text-slate-600 text-3xl md:text-5xl block mt-2">{{ subtitle }}</span>
        </h1>
        
        <p class="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-light max-w-xl leading-relaxed">
          {{ bio }}
        </p>
        
        <div class="flex flex-wrap gap-4 mt-4">
          <a class="flex items-center justify-center rounded-lg h-12 px-6 bg-slate-900 dark:bg-white text-white dark:text-background-dark text-sm font-bold transition-all hover:bg-primary dark:hover:bg-primary dark:hover:text-white" href="#work">
            <span class="material-symbols-outlined mr-2 text-sm">code</span> View Projects
          </a>
          <a class="flex items-center justify-center rounded-lg h-12 px-6 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors" href="https://github.com" target="_blank">
          <IconGithub class="size-5 fill-current mr-2" /> GitHub Profile
          </a>
        </div>
      </div>

      <div class="hidden lg:block relative">
        <div class="bg-code-bg rounded-xl border border-white/10 p-6 font-mono text-sm shadow-2xl">
          <div class="flex gap-2 mb-4">
            <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div class="space-y-2">
            <p class="text-purple-400"><span class="text-blue-400">class</span> <span class="text-yellow-400">Developer</span> {</p>
            <p class="pl-4 text-blue-300">constructor<span class="text-slate-300">() {</span></p>
            <p class="pl-8 text-slate-300">this.<span class="text-blue-400">name</span> = <span class="text-green-400">'{{ name }}'</span>;</p>
            <p class="pl-8 text-slate-300">this.<span class="text-blue-400">traits</span> = [<span class="text-green-400">'Problem Solver'</span>, <span class="text-green-400">'Coffee'</span>];</p>
            <p class="pl-4 text-slate-300">}</p>
            <p class="pl-4 text-purple-400">async <span class="text-blue-300">sayHello</span><span class="text-slate-300">() {</span></p>
            <p class="pl-8 text-slate-300"><span class="text-blue-400">console</span>.<span class="text-blue-300">log</span>(<span class="text-green-400">'Hello World! 🚀'</span>);</p>
            <p class="pl-4 text-slate-300">}</p>
            <p class="text-purple-400">}</p>
          </div>
        </div>
        <div class="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 -z-10 rounded-xl blur-3xl"></div>
      </div>

    </div>
  </section>
</template>
