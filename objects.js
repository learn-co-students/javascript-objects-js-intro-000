var playlist = {
  owlCity: "Hot Air Balloon"
}

function updatePlaylist(playlist, artist, song) {
   playlist[artist] = song
   return playlist
}
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
