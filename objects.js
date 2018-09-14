var playlist = {
  "My Bloody Valentine": "Sometimes",
  "Slowdive": "Alison"

};

function updatePlaylist(playlist, artist, title) {
  playlist[artist] = 'title';

  return playlist;
}

function removeFromPlaylist(playlist, artist) {

  delete playlist[artist];

  return playlist;
}
