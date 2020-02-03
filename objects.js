
var playlist = {
  rosendo: 'maneras de vivir',
  platero: 'soldadito marinero',
  tequila: 'en la plaza del pueblo'
};

function updatePlaylist(playlist, artistName, songTitle) {
  //return Object.assign(playlist, {[name]: song});
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
