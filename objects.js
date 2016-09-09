var playlist = {
  coldplay: "paradise",
  nirvana: "smells like teen spirit"
}
//this failed multiple times because you were missing the comma after paradise.
function updatePlaylist(playlist, artist, song){
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  
  return playlist
}
