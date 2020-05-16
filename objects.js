var playlist = {Artist:"Singing"};

function updatePlaylist(playlist, artistName, songTitle) {
  console.log(playlist);
  playlist[artistName] = songTitle;
  console.log(playlist);
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
