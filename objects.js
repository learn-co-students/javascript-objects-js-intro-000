var playlist = {Drake: "Back to Back"}

function updatePlaylist(obj, key, val){
  obj[key]=val
  return obj
}

function removeFromPlaylist(obj, key){
  delete playlist.Drake
  delete playlist [key]
  return playlist
}
