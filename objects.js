var playlist = {artistName: 'songTitle'};
//var playlist = new Object({artistName: 'songTitle'});
//both passing

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;// object[key] = value;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
