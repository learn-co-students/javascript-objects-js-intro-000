var playlist = { "Just Bieber" : "Song Title"}

function updatePlaylist(playlist, artist, title){
  playlist[artist] = title
  return playlist
}
function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}
