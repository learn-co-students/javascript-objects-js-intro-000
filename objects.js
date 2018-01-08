var playlist = new Object({ Artist: 'Mount Kimbie', Song: 'Home Recording' });

function updatePlaylist(playlist, artistName, songTitle) {
   playlist[artistName] = songTitle
   return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
