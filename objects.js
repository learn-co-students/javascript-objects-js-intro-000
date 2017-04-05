var playlist = {
  beyonce : 'lemonade',
  usher : 'yeah',
  bieber : 'purpose'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

updatePlaylist(playlist, 'rihanna', 'needed')

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}

removeFromPlaylist(playlist, 'usher')
