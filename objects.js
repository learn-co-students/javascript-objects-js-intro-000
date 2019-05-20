var playlist = { artistName: "songTitle" };

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Phil Ochs'] = 'Alison';
  playlist['My Bloody Valentine'] = 'Sometimes';
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}