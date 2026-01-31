import {ref} from 'vue';

export function useCopyEmail() {
  const email = 'franciscoluis05.fl@gmail.com'
  const mostrarToast = ref(false)
  

  const copiar = (e) => {
      const isLink = e?.currentTarget?.tagName === 'A'
  
  if (!isLink) {
    window.location.href = `mailto:${email}`
  }

    navigator.clipboard.writeText(email).then(() => {
      mostrarToast.value = true
      setTimeout(() => (mostrarToast.value = false), 3000)
    })
  }

  return { email, mostrarToast, copiar }
}