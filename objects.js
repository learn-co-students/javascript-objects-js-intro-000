var playlist = { "artist names": "song titles" };

function updatePlaylist(playlist, artistName, songTitle) {
  var playlist = {'Phil Ochs': "Here's to the State of Mississippi"};
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
