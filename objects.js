var playlist = new object({song: 'title'});

function updatePlaylist (playlist, artistName, songTitle) {
  return(Object.assign({}, playlist, {[artistName] : songTitle}));
}

function removeFromPlaylist (playlist, artistName) {
  var playlist = playlist;
  delete(playlist.artistName);
  return(playlist);
}
