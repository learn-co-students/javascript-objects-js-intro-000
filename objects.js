var playlist = {
  Metallica: "Enter Sandman",
  "Iron Maiden": "Purgatory"
}

function updatePlaylist(playlist, artistName, song) {
  playlist[artistName] = song

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
