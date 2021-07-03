var playlist = {artist1: 'song1'};

function updatePlaylist(pllst, artist, song) {
  pllst[artist] = song;
}

function removeFromPlaylist(pllst, artist) {
  delete pllst[artist];
}