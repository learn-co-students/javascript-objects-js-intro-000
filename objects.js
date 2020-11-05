var playlist = { Beatles: "Yesterday", Slowdive: "No"}

function updatePlaylist (playlist, name, title) {
  return Object.assign(playlist, {[name]: title})
}

function removeFromPlaylist (playlist, name) {
  delete playlist[name]
  return playlist
}