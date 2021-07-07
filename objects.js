var artistName = "Phil Collins";
var songTitle = "In the Air Tonight";

var playlist = new Object({[artistName]: songTitle});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
