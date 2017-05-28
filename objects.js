playlist= {adele: 'rolling in the deep'};

function updatePlaylist(playlist, artist, song) {
  return playlist[artist]=song;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
}