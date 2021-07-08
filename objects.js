var playlist = {
  'The Clash': 'Career Opportunities'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}
