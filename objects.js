var playlist = {
  'Drake' : 'Yolo'
}

function updatePlaylist(playlist, artistName, songName){
  return playlist[artistName] = songName
}

function removeFromPlaylist(playlist,artistName){
 delete playlist.artistName;
 return playlist;
}
