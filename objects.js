//highlighted


var playlist = new Object({Arijit:'Tum Ho'});

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, Name){
  delete playlist[Name]
  return playlist
}
