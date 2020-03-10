var playlist = {
  Blink182: "Age Again"
}

function updatePlaylist(playlist2, artistName, songTitle) {
  //playlist2.artistName = songTitle
  playlist2 = Object.assign(playlist2, {[artistName] : songTitle})
  return playlist2
}

function removeFromPlaylist(playlist2, artistName){
  delete playlist2[artistName]
  return playlist2
}
