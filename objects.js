var playlist = {
  avengedSevenfold: 'a little piece of heaven',
  fiveFingerDeathPunch: 'a little bit off',
  egyptCentral: 'white rabbit',
  panicAtTheDisco: 'old fashioned'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
