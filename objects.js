var playlist = {artist: 'song titles' }

function updatePlaylist(playlist, artistName, title){
  playlist[artistName] = title
  return playlist
}


function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive
  return playlist
}