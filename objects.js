var playlist = {
  artist: ["Sabina"],
  songs: ["La cancion mas hermosa del mundo"]
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
