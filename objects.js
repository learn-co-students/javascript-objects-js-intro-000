let playlist = {
  'Avicii': 'Penguin' ,
  'Kygo': 'Firestone'
};

function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist='Phil Ochs']=[songTitle='My Bloody Valentine']
  return playlist
}


function removeFromPlaylist(playlist, artist){
  delete playlist[artist='Slowdive'];
  return playlist
}
