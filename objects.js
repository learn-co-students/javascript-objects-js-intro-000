var playlist = {'Keiko Matsui': 'The Sun Rises'}

function updatePlaylist(obj, artist, song) {
  obj[artist] = song;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
