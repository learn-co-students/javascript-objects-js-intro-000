var playlist = {
  artistName: 'songTitle'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Slowdive'] = 'songTitle';
  playlist['My Bloody Valentine'] = 'songTitle';
  playlist['Phil Ochs'] = 'songTitle';
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
  return playlist;
}
