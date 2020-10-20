var playlist = {singer: "singing"};

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
