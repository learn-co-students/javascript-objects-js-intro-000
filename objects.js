var playlist = {janelle : 'django jane', 
  frank : 'nights',
  feist : 'intuition'
}
function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = {songTitle}
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  playlist;
}