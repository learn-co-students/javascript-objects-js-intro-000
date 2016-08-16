var playlist = {
  redHotChiliPeppers: "Hard To Concentrate",
  weezer: "Say It Ain't So",
  bibio: "Lover's Carvings",
  bobMarley: "Buffalo Soldier",
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist [artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
