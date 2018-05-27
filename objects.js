var playlist = new Object({artist:""}); //artist will have a property of 'artist' that will store the value "song titles"... is this an array?


function updatePlaylist(playlist, artistName, songTitle){

  playlist[artistName] = songTitle;

  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];

  return playlist;
}
