var playlist = {
  "hendrix": 'Voodoo Chile'
}

function updatePlaylist(playlist, artistName, songTitle){

  playlist[artistName] = songTitle
  return playlist
}

updatePlaylist(playlist, 'Pearl Jam', 'Black');


function removeFromPlaylist(playlist, artistName){

  delete playlist[artistName]
  return playlist
}

removeFromPlaylist(playlist, 'hendrix');
