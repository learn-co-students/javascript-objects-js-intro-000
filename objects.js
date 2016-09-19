playlist = {artistname: 'songTitle'};

function updatePlaylist(playlist, artistname, songTitle) {
  playlist[artistname] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistname) {
  delete playlist[artistname];
  return playlist;
}
