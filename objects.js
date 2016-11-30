var playlist = {key:"value"}

function updatePlaylist(obj, key, value){
  // Object.assign({ "Phili Ochs": "Here's to the State of Mississippi" })
  //  Object.assign({},  { artistName:"songTitle"})
    // return playlist;
    return Object.assign(obj, {[key]: value})
}

function removeFromPlaylist (obj,key) {
  delete playlist.key;
  return playlist

}
