<template>
    <div class="container">
        <div class="columns">
            <div class="column is-5 is-offset-4">
                <pm-track :track="track" />
            </div>
        </div>
    </div>
</template>
<script>
import PmTrack from '@/components/Track.vue'
import trackService from '@/services/track'
export default {
    components: { PmTrack },
    data () {
        return {
            track: {}
        }
    },
    created () {
        const { id } = this.$route.params
        trackService.getById(id)
            .then(res => {
                this.track = res
            })
    }
}
</script>

<style lang="scss" scoped>
    .columns{
        margin:10px
    }    
</style>

