var playlist = { NoDoubt: "Simple Kind of Life" };

function updatePlaylist (playlist, artistName, songTitle) {
  var playlist = { [artistName]: songTitle };
  return playlist;
};

function removeFromPlaylist(playlist, artistName) {
  var songTitle = "song";
  var playlist = { [artistName]: songTitle };
  delete playlist[artistName];
  return playlist;
};
