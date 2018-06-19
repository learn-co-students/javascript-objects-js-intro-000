var playlist = {"Miley Cyrus": "We Can\'t Stop"}

function updatePlaylist(playlist, artistName, songTitle){
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  return delete playlist[artistName];
}
