<template>
  <div id="app">
    <pm-header />
    <router-view></router-view>
    <pm-footer />
  </div>
</template>

<script>
import PmHeader from '@/components/layout/Header.vue'
import PmFooter from '@/components/layout/Footer.vue'
export default {
  name: 'app',
  components: { PmFooter, PmHeader }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .is-active{
    border: 3px #23D160 solid;
  }
</style>
