var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Slowdive'] = 'song';
  playlist['My Bloody Valentine'] = 'song2';
  playlist['Phil Ochs'] = 'song3';
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  return playlist;
}
