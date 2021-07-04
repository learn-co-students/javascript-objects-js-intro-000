var playlist = {
  Nirvana: 'Smells Like Teen Spirit',
  Drake: 'Passionfruit'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function  removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
