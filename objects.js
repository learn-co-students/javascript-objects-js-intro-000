var playlist = new Object({name: "song"});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}


var playlist = { Kanye: 'Gold Digger' }

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
