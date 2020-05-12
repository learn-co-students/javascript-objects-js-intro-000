var playlist = {"My Bloody Valentine":"Slowdive"};


function updatePlaylist(playlist, artistName, song) {
  playlist[artistName] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist [artistName];
  return playlist;
}