var playlist = {
  Primus: "Tommy the Cat"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  var name = artistName
  delete playlist[name]
  return playlist
}
