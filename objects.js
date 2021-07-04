var playlist = {
  'Phil Ochs': 'My Bloddy Valentine',
  'Lauren Daigle': 'You Say'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}


function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  
  return playlist
}