var playlist = {NSYNC: "Bye bye bye"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
delete playlist.NSYNC
delete playlist.Slowdive
delete playlist.MYBLOODYVALENTINE
artistName;
}
