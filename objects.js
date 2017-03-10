var playlist = { Slowdive: "Can't Buy Me Love" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = "Another Age"
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist['Slowdive'];
}