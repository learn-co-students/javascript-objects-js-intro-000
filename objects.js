var playlist = {
  'Better Than Ezra': 'Good',
  U2: 'One'
}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist [artistName];
  return playlist;
}
