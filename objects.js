var playlist = {TaylorSwift : `Blank Space`}
function updatePlaylist(playlist,artist,songTitle){
  playlist[artist]=songTitle
}
function removeFromPlaylist(playlist, artistName){

  delete playlist[artistName]
}
