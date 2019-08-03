var playlist = {
  "R.E.M": "The Sweetness Follows"
}

function updatePlaylist (playist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
