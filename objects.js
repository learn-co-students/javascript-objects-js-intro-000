var playlist = {"Phil Ochs": "Here's to the State of Mississippi"}

function updatePlaylist(obj, key, value){
  // Object.assign({ "Phili Ochs": "Here's to the State of Mississippi" })
   Object.assign({},  { "artistName":"songTitle"})
   return Object.assign(obj, {key: value}
  //  return playlist;
}


function removeFromPlaylist (obj,key,value) {
  delete playlist.artistName;
  return playlist

}
