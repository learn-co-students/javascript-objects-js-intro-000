var playlist = {
  jBalvin: "Positivo",
  ozuna: "Modelo",
  cardiB: "I like it"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
