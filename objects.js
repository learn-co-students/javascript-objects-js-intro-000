var playlist ={`Nas`:`Hate me now`,
                Jay Z:`99 Problems` }

function updatePlaylist( playlist, artist, song){
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
