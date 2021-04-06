var playlist = {
    Future: 'Lights',
    Cent: 'In da club',
    Elvis: 'shookup'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
