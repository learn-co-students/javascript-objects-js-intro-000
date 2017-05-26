


var playlist = {'Slowdive': 'Allison'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
}

updatePlaylist(playlist);

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive
  return playlist
}
