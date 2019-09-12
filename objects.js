var playlist = { 'Jessica Simpson': 'Chicken of the Sea'}

function updatePlaylist(playlist, artistName, songTitle) {  
playlist[artistName] = songTitle
  
}

function removeFromPlaylist(playlist,artistName){
delete playlist[artistName]
playlist
}
