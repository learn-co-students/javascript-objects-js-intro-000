var playlist = {song: "artist"};

function updatePlaylist(playlist, artistName, songTitle) {
  //obj[key] = value
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
