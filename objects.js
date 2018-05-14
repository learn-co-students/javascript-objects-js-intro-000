var playlist  = {john: "caffeine"}

function updatePlaylist(playlist, name, song) {
   playlist[name] = song

  return playlist
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name]

}
