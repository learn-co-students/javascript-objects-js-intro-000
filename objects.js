
var playlist = new Object({Drake:'One Dance'});
function updatePlaylist(playlist, name, song) {
   playlist[name] = song
  return playlist
}

function removeFromPlaylist (playlist, name) {
  delete playlist[name]
  return playlist
}
