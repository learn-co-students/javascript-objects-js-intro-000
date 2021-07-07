var playlist = { 
  MyBloodyValentine : "Sometimes", 
  Slowdive : "Alison",
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}