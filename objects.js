var playlist = {
  BobDylan: 'Like a Rolling Stone',
  TVZ: 'If I Needed You',
  AdeGrassi: 'Turning'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName, songTitle){
  delete playlist[artistName]
  return playlist
}
