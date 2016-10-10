var playlist = {Jackson: 'Thriller', Game: 'Pest Control', Meek: 'Ooouuuu'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
