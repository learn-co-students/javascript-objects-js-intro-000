var playlist = new Object();
playlist["Vivaldi"] = "Four Seasons";
playlist["Jonathan Bach"] = "Brandonburg";

var updatePlaylist = function(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

var removeFromPlaylist = function(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
};
