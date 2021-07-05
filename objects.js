var playlist = {surfaces: 'bloom'};

//var playlist = {surfaces: 'bloom'};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Slowdive'] = 'Alison'
  playlist['My Bloody Valentine'] = 'Sometimes'
  playlist[artistName] = songTitle;
  return playlist;
}


function removeFromPlaylist(playlist,artistName){
      delete playlist.Slowdive;
  return playlist;
}
