var playlist = {'artistName': 'playlist'};

function updatePlaylist (playlist,'artistName' , song) {
  return Object.assign({}, playlist, {['artistName']:song})
}

function removeFromPlaylist (playlist, artistName) {
delete playlist[artistName]
return playlist
}
