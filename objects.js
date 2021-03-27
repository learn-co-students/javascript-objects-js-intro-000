var playlist = new Object({JukeBox: 'Fred Astaire'})

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}
