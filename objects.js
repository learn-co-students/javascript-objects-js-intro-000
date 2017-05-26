var playlist = new Object();
playlist['max richter'] = 'departure'

function updatePlaylist(playlist, artistName, songTitle){
  return playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
