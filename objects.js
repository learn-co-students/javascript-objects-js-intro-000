var playlist = {
  "Garbage": "Empty",
  "Sleater-Kinney": "Ironclad"
};

function updatePlaylist(obj,key,value) {
  // add song and artist as key-value pair to playlist object.
  // Return the whole playlist
  obj[key] = value;

  return obj;
}

function removeFromPlaylist(obj,key) {
  delete obj[key];
  return obj;
}
