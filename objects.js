var playlist = {
  hallAndOats: "Rich Girl",
  simonAndGarfunkel: "America",
  bobDylan: "Hurricane",
  woodyGuthrie: "This Land",
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
