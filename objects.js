const playlist={artistName:'song'}
function updatePlaylist(playlist,artistName,song){
  return playlist[artistName]=song
}
function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}
