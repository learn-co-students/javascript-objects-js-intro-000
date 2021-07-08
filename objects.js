var playlist = new Object({artistName: 'song name'})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle; // Object[key] = value
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]; // delete Object.key
  return playlist; // return the mutated playlist
}