var playlist = {
  davis: "blue",
  coltrane: "giant",
  monk: "monk"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle });
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye;
  return playlist;
};
