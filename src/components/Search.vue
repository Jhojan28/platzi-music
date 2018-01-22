<template>
  <main>
    <pm-notification v-show="showNotification">
      <p slot="body">No se encontraron resultados</p>
    </pm-notification>
    <pm-loader v-show="isLoading"/>
    <section class="section" v-show="!isLoading">
      <nav class="nav">
        <div class="container">
          <input class="input is-large" type="text" placeholder="buscar" v-model="searchQuery" @keyup.enter="search">
          <a class="button is-info is-large" @click="search" href="#">Buscar</a>
          <a class="button is-danger is-large" href="">&times;</a>
        </div>
      </nav>
      <div class="container">
        <div class="columns is-multiline">
          <div :key="track" class="column is-one-quarter"  v-for="track in tracks">
            <pm-track v-blur="track.preview_url" :track="track" @select="setSelectedTrack" :class="{ 'is-active': track.id === selectedTrack }" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import trackService from '@/services/track'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'
export default {
  name: 'app',
  components: { PmTrack, PmLoader, PmNotification },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss" scoped>

  .is-active{
    border: 3px #23D160 solid;
  }
</style>
