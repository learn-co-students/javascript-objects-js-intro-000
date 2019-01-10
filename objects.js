var playlist = {
  'Ella Fitzgerald': "Summertime",
  'Prince': "Purple Rain",
  'Nickelback': "How You Remind Me"
};

var updatePlaylist = function(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

var removeFromPlaylist = function(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
