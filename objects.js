var playlist = {
  "John Lennon" : "Imagine",
  Adele : "Hello",
  EdSheeran : "Photograph"
}

function updatePlaylist (playlist, artist, song){
  playlist[artist] = song;

  return playlist

}

function removeFromPlaylist (playlist, artist){
  delete playlist[artist];

  return playlist

}
