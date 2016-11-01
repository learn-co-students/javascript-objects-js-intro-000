var playlist = {
  charlie: "One Call Away"
};

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song});
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
