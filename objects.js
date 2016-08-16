var playlist = { artistName: 'songTitles' };
//limit imposed on our playlist is that there can only be one artist

function updatePlaylist(playlist, artistName, songTitles) {
  playlist[artistName] = songTitles;
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
