var playlist = {
  "Kygo": ["Firestorm", "We will rock you"]
}

function updatePlaylist(playlist, key, value) {
  return Object.assign(playlist, {[key]: value});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
