var playlist = {aya : "soldat"}

function updatePlaylist(playlist, artist, song){
playlist[artist]=song
return

}

function removeFromPlaylist(playlist, artist){

  delete playlist[artist]
  return playlist
}
//Object.assign(playlist, { artist: ['song'] })
