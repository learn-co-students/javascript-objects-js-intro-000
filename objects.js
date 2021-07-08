var playlist = {
  artist:'song title'
}

function updatePlaylist(obj,key,value){
  return obj[key] = value
}

function removeFromPlaylist(obj,artistName){
  delete obj[artistName];
}
