var playlist = {
  'The Residents': 'Japanese Watercolor',
  'Kraftwerk': 'Ohm Sweet Ohm'
};

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  //return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
 //return playlist;
}
