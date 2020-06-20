var playlist = {ACDC: "Cherry Pie"}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName, songTitle){
  delete playlist[artistName]
}
