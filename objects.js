var playlist = {
  kanyeWest: "Power",
  frankOcean: "Nikes"
}

playlist

function updatePlaylist (playlist, drake, over){
  playlist[drake] = over
}

playlist

function removeFromPlaylist (playlist, drake){
  delete playlist[drake];
  return playlist
}
