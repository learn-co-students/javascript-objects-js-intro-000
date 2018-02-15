var playlist = {
  Diomedes: "La ventana marroncita"
};

function updatePlaylist(playlist, artistName, songTiTle) {
  return Object.assign(playlist, {[artistName]: songTiTle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
