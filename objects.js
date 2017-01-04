var playlist = {tupac:'all eyez on me'};

function updatePlaylist(playlistName, artistName, songName) {
  playlistName[artistName] = songName
  return playlistName
}

function removeFromPlaylist(playlistName, artistName) {
  delete playlistName[artistName]
  
}
