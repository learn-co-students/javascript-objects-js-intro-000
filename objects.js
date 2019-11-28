var playlist = {
  faithNoMore: "King for a day, fool for a lifetime",
  jamiroquai: "Lightstar",
  suicidalTendencies: "Medicine man"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
  //return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
