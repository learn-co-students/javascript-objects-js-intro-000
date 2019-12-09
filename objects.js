var playlist = {
  'Phil Ochs' : "Here's To The State Of Mississippi"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Slowdive'] = 'Alison'
  playlist['My Bloody Valentine'] = 'Sometimes'
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
}
