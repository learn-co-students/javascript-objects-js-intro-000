var playlist ={ Micheal:"Bad"};
function updatePlaylist(playlist, artistName, songTitle){
  playlist [artistName] = songTitle;
}
function removeFromPlaylist(playlist, artistName){
  return delete playlist[artistName];
}