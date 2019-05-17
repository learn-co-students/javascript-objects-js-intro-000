var playlist = {
  Beatles: "Love Me Do"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle; //this changes the original object
  return playlist;
  //return Object.assign({}, playlist, {[artistName]: songTitle}); //this would return a new object with the additional key/value
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
