var playlist = {
  artist: "songTitle"
}

function updatePlaylist(obj, artist, song){
  obj[artist] = song
  return obj
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];

  return playlist
}
