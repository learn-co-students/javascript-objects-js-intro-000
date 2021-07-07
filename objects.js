var playlist = {"Jimi Hendrix": "Are You Experienced?", "Led Zeppelin": "The Lemon Song"}


function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}