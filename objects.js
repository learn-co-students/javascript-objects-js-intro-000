var playlist ={
  Rush: "Tom Sawyer"
}

function updatePlaylist(playlist, artistName, SongTitle){
  playlist[artistName] = SongTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
