var playlist = { michel : "heal the world" };

function updatePlaylist (playlist,aritstName, songTitle){
  playlist[aritstName] = songTitle

  return playlist

}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]

  return playlist
}
