var playlist = {
  Jackson: "Song 1",
  Michael: "Song 2"
};


function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName, songTitle) {
  delete playlist[artistName]
  return playlist;
}
