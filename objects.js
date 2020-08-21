const playlist = {
  Prince : 'Doves Cry',
  MCR : 'Im Ok'
}


function updatePlaylist (playlist, BSB , Life) {
  playlist[BSB]= 'Life'
  return playlist
}

function removeFromPlaylist(playlist, BSB){
  delete playlist[BSB]
  return playlist
}
