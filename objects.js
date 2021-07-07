var playlist = {
  Portugal: "The Man",
  Gorillaz: "Feel Good"
}

function updatePlaylist (playlist, Yo, Moon){
  playlist[Yo] = "Moon"
  return playlist
}

function removeFromPlaylist(playlist, Gorillaz){
  delete playlist[Gorillaz]
  return playlist
}
