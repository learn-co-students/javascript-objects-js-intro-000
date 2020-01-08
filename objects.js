var playlist = {
  "Phil Ochs": "songTitle"
};


function updatePlaylist(playlist, key, value) {
  return Object.assign({key: "value"}, playlist, { [key]: value })
}


function removeFromPlaylist(playlist, key) {
  delete playlist[key];
  return playlist
}
