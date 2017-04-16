var playlist = { "artistName": "songTitle"};

/*The alternative format listed in these comment lines would not work.  As a reminder of what they are, though:
The examples and such should be listed in JS-Objects.
function updatePlaylist(playlist, artistName2, songTitle) {
  playlist = Object.assign({}, playlist, {[artistName2]: songTitle })
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
} */
function updatePlaylist(playlist, artistName2, songTitle) {
  playlist = playlist[artistName2] = [songTitle];
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  if (playlist.artistName === "songTitle") { delete playlist.artistName }  // only instance of delete playlist.artistName working.
  delete playlist[artistName];
  return playlist;
}