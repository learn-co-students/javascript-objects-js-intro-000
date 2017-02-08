var playlist = {
  artist: "Song Title"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playList, artistName) {
  delete playlist[artistName];
  return playlist;
}
