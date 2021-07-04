var playlist = {
  Taylor : "Back to December"
  //Williams : "Happy"
}
//                       object, key(string), value
function updatePlaylist(playlist, artistName, songTitle){
  playlist [artistName] = "songTitle"
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  //delete playlist.Taylor;
  //delete playlist['Taylor']
  delete playlist[artistName]
  return playlist
  //console.log(playlist.artistName);

}
