var playlist = {'Taylor Swift':'Delicate'};

function updatePlaylist(playlist, artistName, songTitle){
   return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
