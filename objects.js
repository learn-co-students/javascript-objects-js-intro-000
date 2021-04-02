var playlist = {JCole : "Fire Squad"};

function updatePlaylist(playlist, artistName, songTitle){
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  return delete playlist[artistName];
}
