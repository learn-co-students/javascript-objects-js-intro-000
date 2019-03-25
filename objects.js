var playlist = {
  madonna: "material girl",
  cher: "turn back time",
  rupaul: "sissy that walk"
};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist [artistName] = songTitle
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
