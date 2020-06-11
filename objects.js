var playlist = {songTitle: [] };                                // one way to make an Object

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle                             // add a key and value to object playlist
  return playlist
}

function removeFromPlaylist(playlist, artistName) {             // remove a key-value from object called playlist
  delete playlist[artistName];
  return playlist
}
