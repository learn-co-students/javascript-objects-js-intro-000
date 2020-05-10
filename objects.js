var playlist = {
  Beyonce: "Single Ladies"
};

function updatePlaylist(obj, artistName, songTitle){
  return Object.assign(obj,{[artistName]:songTitle})
}

function removeFromPlaylist(obj, artistName){
  obj = delete obj[artistName]
  return obj
}
