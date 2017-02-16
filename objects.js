var playlist = Object({BonJovi: "Dead or Alive"})

function updatePlaylist(playlist, artistName, songTitle) {
//  return Object.assign({}, playlist, {[artistName]: songTitle})
  Object.assign(playlist, {[artistName]: songTitle})
//  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
//  console.log(playlist)
}