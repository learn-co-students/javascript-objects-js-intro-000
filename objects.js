var playlist = new Object({});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['artistName'] = 'songTitle';
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.ArtistName;
  return playlist
}
