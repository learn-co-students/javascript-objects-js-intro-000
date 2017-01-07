var playlist = {KanyeWest : "Famous"};

function updatePlaylist(playlist, artist, songname){
  playlist[artist] = songname
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}