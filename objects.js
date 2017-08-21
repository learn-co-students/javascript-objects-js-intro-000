var playlist = {artist:"Salam"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = "Guta";
  playlist.songTitle = "Haha";
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}