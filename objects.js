
var playlist = {artist: "songName"};

function updatePlaylist(playlist, artist, songName){
  playlist[artist] = songName
  return playlist
}


function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}
