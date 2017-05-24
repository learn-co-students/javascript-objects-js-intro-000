var playlist = {
  'Foo Fighters' : 'Everlong',
  'WideSpread Panic': 'Rock on the River'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist

}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
  //delete the key-value pair from playlist and return updated playlist
}