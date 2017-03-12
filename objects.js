var playlist = {goldman: "violon"};

function updatePlaylist(playlist, artist, song){
  playlist[artist]=song
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}
//non destructive :   return Object.assign({}, playlist, {[artist]: song})
