var playlist = {name: 'title'};

function updatePlaylist(playlist, artistName, songTitle) {
   return playlist[artistName] = 'songTitle'
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist
}
