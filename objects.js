var playlist = new Object({ Muse:'Black Hole'})

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}