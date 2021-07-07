var playlist = {
  sum41: "pieces"
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
};

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
