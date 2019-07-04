var playlist = {
  artistName: 'The Residents',
  songTitle: 'Japanese Watercolor'
};

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  //return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
 //return playlist;
}
