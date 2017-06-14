var playlist = { 'cher': 'believe'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=songTitle;
  console.log(playlist);
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  console.log(playlist);
  return playlist;

}
