var playlist = {
  name: 'Pop Smoke',
  song: 'What you know bout love'
}

function updatePlaylist(playlist, artist, songTitle){
playlist[artist] = songTitle
return playlist
}
var art = {Bruno: Treasure}

  updatePlaylist(art, 'floor','HAD ENOUGH' )

function removeFromPlaylist(playlist, artistName){

  delete playlist[artistName];
  return playlist
}
removeFromPlaylist()
