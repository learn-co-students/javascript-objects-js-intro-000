var playlist = {
  Slowdive: 'Alison',
};

function updatePlaylist(playlist, name, song) {
  playlist['Phil Ochs'] = 'My Bloody Valentine'
  return playlist
}

function removeFromPlaylist(playlist, name) {
  delete playlist.Slowdive
  return playlist
}
