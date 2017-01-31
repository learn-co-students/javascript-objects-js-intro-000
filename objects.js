var playlist = {
  KatyPerry: 'Roar',
  LadyGaga: 'Born this Way',
  JasonMraz: 'Im Yours'
}
function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
