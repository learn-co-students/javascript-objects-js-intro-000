var playlist = {
  artistName : "The beatles",
  songTitle : "Lets go to sky"
}


function updatePlaylist(playlist, artistName, songTitle){
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  return delete playlist[artistName];
}
