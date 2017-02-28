var playlist = new Object({Deux: 'Carpe Diem'});

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  
}

