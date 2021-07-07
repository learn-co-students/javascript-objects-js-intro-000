var playlist = { Slowdive: 'Alison', MyBloodyValentine: 'Sometimes'} 

function updatePlaylist (playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
  return playlist
}

function removeFromPlaylist(artistName, songTitle) {
  delete playlist.Slowdive;
  return playlist;
}