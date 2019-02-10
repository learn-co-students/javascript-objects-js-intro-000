var playlist = {
  'beyonce': 'hold up',
  'fiona apple': 'every single night',
  'alessia cara': 'my kind'
}

function updatePlaylist(playlist, artistName, songTitle){
playlist[artistName] = songTitle; }

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}
