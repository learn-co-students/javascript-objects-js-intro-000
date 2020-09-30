var playlist = { "Future": "Mask off" }


//destructive function
function updatePlaylist(obj, artist, song) {
  // return Object.assign({}, obj, {[artist]: song})
  obj[artist] = song;
  return obj
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist];
  return obj
}
