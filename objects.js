var playlist = {doINeed : "anActualExample"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  //why does playlist = {artistname : songTitle} fail?
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];

  //why does delete playlist.artistName not work?


  return playlist;
}
