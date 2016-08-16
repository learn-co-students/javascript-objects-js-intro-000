var playlist={shaheer: "amsterdam", imaginedragons: "hear me"};

/*function updatePlaylist(playlist, artistName, songTitle){
    playlist.artistName=songTitle
    return playlist
 }*/

 function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}
  //Object.assign({}, playlist, { [artistName]: songTitle})

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}
