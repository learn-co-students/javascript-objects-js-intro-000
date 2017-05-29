var playlist = new Object();
playlist['Metallica'] = "Nothing Else Matters";

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle; // Optionally, the return keyword could be prepended to this statement.
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  // return playlist;  could be optionally added
}
