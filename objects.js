var playlist = {artist: "songs"};

// destructively update playlist
function updatePlaylist(playlist, artistName, songTitle){
playlist[artistName] = songTitle;

return playlist
}

function removeFromPlaylist(playlist, artistname){

  delete playlist[artistname];
  return playlist;
}