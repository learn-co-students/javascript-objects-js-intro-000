var playlist = { Nishino:'Tori' };

function updatePlaylist(playlistName, artistName, songTitle) {
  playlistName[artistName] = songTitle;
  return playlistName;
}

function removeFromPlaylist(playlistName, artistName) {
  delete playlistName[artistName];
  return playlistName;
}
