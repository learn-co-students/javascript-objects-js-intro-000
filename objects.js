var playlist = {}
playlist['Slowdive'] = 'Alison'
playlist['My Bloody Valentine'] = 'Sometimes'
function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName]= songTitle
  return playlist
}
function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}
