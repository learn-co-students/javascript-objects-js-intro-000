var playlist = {
  prince: "song name"
}
//define an object called playlist containing at least one artist-song pair
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}
//removes artistName from playlist
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist;
}
