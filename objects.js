var playlist = {nirvana: 'come as you are', crumb:'locket'}
function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign(playlist,{[artistName]:songTitle})
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName]
  return playlist
}
