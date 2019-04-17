var playlist = {
  'George Ezra': 'Shotgun',
  'Young the Giant': 'Cough Syrup',
  'The Wallflowers': 'One Headlight',
  'Israel Kamakawiwoʻole': 'Somewhere Over the Rainbow'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
