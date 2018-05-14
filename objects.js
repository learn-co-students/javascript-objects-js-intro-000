var playlist = {nsync: "it's gonna be me"};

//artistName is not a simple string, so cannot use dot notation to access it
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
