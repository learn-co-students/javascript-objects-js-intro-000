var playlist = {
  artistName: 'U2',
  songTitle: 'In the Name of Love'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'Beyonce';
  playlist[songTitle] = 'Lemonade';
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}