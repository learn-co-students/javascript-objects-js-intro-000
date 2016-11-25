var playlist = {Akon:'Smack That'}

function updatePlaylist(playlist,artistName,songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName]
  return playlist
}
