var playlist = {
  abba: "Mamma Mia",
  scorpions: "Still Loving You",
  direStraits: "Money For Nothing"
}

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  playlist
}

function removeFromPlaylist (playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
