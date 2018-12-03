var playlist = {
  'Nirvana' : 'Smells Like Teen Spirit',
  'Foo Fighters' : 'Everlong'
}

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}
