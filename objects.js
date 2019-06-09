var playlist = {
  Disclosure: "Latch",
  "The Paper Kites": "Paint"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
