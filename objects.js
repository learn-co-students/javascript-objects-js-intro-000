var playlist = {"Bob Marley": "No Woman, No Cry"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
