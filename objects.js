var playlist = {
  "The Weekend":  "Starboy"
}

function updatePlaylist(object, artistName, songTitle) {
  object[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
