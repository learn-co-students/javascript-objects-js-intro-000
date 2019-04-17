var playlist = {"Foundations of Wayne": "Stacys Mom", "Bowling For Soup": "High School Never Ends"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
