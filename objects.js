var playlist = {
  "Micheal Jackson" : "Man in the Mirror",
  "Prince" : "Diamonds and Pearls"
};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
