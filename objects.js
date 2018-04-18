
var playlist = {
  'bon jovi': "you give love a bad name"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return(playlist);
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return(playlist);
}
