var playlist = {drake: 'toosie slide'};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]= 'Slowdive', 'My Bloody Valentine', 'Phil Ochs';
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
  return playlist
}