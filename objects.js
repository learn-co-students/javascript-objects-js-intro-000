var playlist = {
  'Reel Big Fish': 'Beer',
  'Orgy': 'Blue Monday'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}