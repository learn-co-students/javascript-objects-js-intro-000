var playlist = {'Mago de oz': 'fiesta pagana',
                'Witney houston': 'Always'}

function updatePlaylist (playlist, artistName, songTitle) {

  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
