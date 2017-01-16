var playlist = {
  usman : 'chumma',
  khadija : 'phudi'
}

function updatePlaylist(playlist, artistName, songTitle) {

  Object.assign(playlist, {[artistName] : songTitle})
  return playlist
 
}

function removeFromPlaylist(playlist, name) {

   delete playlist[name];
  
  return playlist;
 
}
