var playlist = {
  Beyonce: 'Irreplaceable',
  ColdPlay: 'Viva La Vida',
  KidRock: 'Pictures'};

function updatePlaylist(playlist, artistName, songTitle) {

  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist;
}

