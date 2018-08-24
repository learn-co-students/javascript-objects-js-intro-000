var playlist = new Object();
playlist['Pearl Jam'] = 'Black'



function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
