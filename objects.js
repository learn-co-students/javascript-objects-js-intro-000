var playlist = {
  'Boomer': "The love making song"
};

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}

function removeFromPlaylist(obj, key) {
  delete obj[key];
}
