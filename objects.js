var playlist = {artistName : "songTitle"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

playlist.kanye = "Power";

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
}
