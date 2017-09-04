var playlist = {
  "Jackson Five": "ABC 123",
  "Michael Jackson": "Thriller"
};
function updatePlaylist (playlist,artistName,songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};
function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
