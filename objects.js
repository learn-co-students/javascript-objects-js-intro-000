var playlist = {Beck: "Guero"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  var result = Object.assign({}, playlist);
  delete result[artistName];
  return result;
}
