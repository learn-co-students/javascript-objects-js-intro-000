var playlist = {
  Alicia: ["Karma"]
}

function updatePlaylist(playlist, artist, title) {
    playlist[artist] = title
}

function removeFromPlaylist(playlist, artist) {
      delete playlist[artist]
}
