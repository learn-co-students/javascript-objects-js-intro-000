var playlist = {biggie: "hypnotize"};

function updatePlaylist(obj, key, value) {
  obj[key]= value;
}

function removeFromPlaylist(obj, key) {
  delete obj[key];
  return obj;
}
