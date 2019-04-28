var playlist = {
  artistName: "Bob Dylan",
  songTitle: "Like a Rolling Stone"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist = Object.assign(playlist,{[artistName]: songTitle} )
  return playlist
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
//  return playlist
}
