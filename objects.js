
var playlist = {
  'Alt-j': 'Breezeblocks',
  'Regina Spektor': 'Grand Hotel'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
