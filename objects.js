var playlist = {artist: 'song'}

function updatePlaylist(playlist, artist, song) {
  return Object.assign( {}, playlist, {[artist]: song})
}
