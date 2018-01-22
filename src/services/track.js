import platziMusicService from './platziMusic'

const trackService = {}

trackService.search = q => {
  const type = 'track'
  return platziMusicService.get('/search', {
    params: { q, type }
  })
    .then((res) => res.data)
}

trackService.getById = id => {
  return platziMusicService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
