var playlist = {
  artistName:"beyonce",
  songTitle:"If I were a boy"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName];
  return playlist
}
