var playlist = {Tool: '46 & 2'};

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}

function removeFromPlaylist(obj, key) {
  delete obj[key];
  return obj;
}
