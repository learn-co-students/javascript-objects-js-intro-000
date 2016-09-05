var playlist = {
  Metallica: "Enter Sandman",
  "Iron Maiden": "Purgatory"
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
