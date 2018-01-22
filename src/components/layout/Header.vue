<template>
  <section class="hero is-success">
      <div class="hero-head">
          <header class="nav">
              <div class="container">
                  <div class="nav-left">
                      <div class="nav-item"><strong>PlatziMusic</strong></div>
                  </div>
                  <div class="nav-right nav-menu">
                      <router-link class="nav-item" to="/">Buscar</router-link>
                      <router-link class="nav-item" to="about">Nosotros</router-link>
                  </div>
              </div>
          </header>
      </div>
      <div class="hero-body">
          <div class="container has-text-centered">
              <h1 class="title">PlatziMusic</h1>
              <h2 class="subtitle">Canciones que estan en Vue</h2>
              <pm-player />
          </div>
      </div>
  </section>
</template>

<script>
import PmPlayer from '@/components/Player.vue'
export default {
  components: { PmPlayer }
}
</script>
