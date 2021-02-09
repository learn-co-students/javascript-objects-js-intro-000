var playlist = {
  'The Weeknd': 'Call Out My Name',
  'Taylor Swift': 'willow'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;

  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
