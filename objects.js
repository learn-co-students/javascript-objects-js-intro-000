var playlist = {
  'Micheal Jackson': 'Billie Jean',
  'Bob Marley': 'Exodus'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
