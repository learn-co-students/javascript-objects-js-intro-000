var playlist = new Object({'New Edition' : "Cool It Now"});

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

function removeFromPlaylist (playlist, artistName) {
    delete playlist[artistName];
    return playlist;
};
