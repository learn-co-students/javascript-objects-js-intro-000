var playlist = {
    Nas: 'Hate me now',
    JayZ: '99 Problems'
  };

function updatePlaylist( playlist, artistName, song){
  playlist[artistName] = song

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
