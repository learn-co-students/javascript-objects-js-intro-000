var playlist = {
  artist: "Whitney Houston",
  song: "I look to you"
}


function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}

function removeFromPlaylist(obj, key){
  delete obj[key];
  return obj;
}
