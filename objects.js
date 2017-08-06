var playlist = new Object({rickAstley : "Never Gonna Let You Down"})

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle

}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
