var playlist={radiohead:"wierd fishes", bjork:"hunter", "the knife":"rock classics"};

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
