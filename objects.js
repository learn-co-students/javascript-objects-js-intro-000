var playlist = { 'SageFrancis': 'MakeShift Patriot', 
                        'Sole': 'Bottle of Humans', 
                  'Vinnie Paz': 'Role of life'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, Slowdive) {
  delete playlist.Slowdive;
  return playlist;
}
