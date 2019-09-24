var playlist = {
  Adele: 'Hello',
  Beyonce: 'Halo',
  'Ed Sheeran': 'Shape of You'
}


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
