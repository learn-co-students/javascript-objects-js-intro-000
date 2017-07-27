var playlist = new Object({name: 'title'}) //only 1 song per artist can be saved
function updatePlaylist(playlist,artist,song){
  playlist[artist] = song
  return playlist
}
function removeFromPlaylist(playlist,artist){
  delete playlist[artist]
  return playlist
}
