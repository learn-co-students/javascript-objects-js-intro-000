var playlist = {beyonce: 'put a ring on it'}

function updatePlaylist(playlist, artistName, songTitle){
  var an = artistName
  var st = songTitle
  playlist[an] = st
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  var an = artistName
  delete playlist[an]
  return playlist
}