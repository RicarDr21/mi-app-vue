<script setup lang="ts">
import { ref, onMounted } from 'vue'

const mensaje = ref('Cargando...')

onMounted(async () => {
  try {
    const respuesta = await fetch('http://localhost:3000/api/mensaje')
    const datos = await respuesta.json()
    mensaje.value = datos.mensaje
  } catch (error) {
    mensaje.value = 'Error al conectar con el backend'
  }
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h1>{{ mensaje }}</h1>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
  padding-top: 2rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

h1 {
  font-size: 2rem;
  color: #42b883;
}
</style>