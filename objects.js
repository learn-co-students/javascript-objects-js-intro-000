var playlist = {
  ['Slowdive']: 'Alison',
  ['My Bloody Valentine']: 'Sometimes'
};

function updatePlaylist(playlist, artist, song) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi";
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
}
