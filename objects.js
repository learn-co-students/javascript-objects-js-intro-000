var playlist = {['Christopher Tin'] : "Babu Yetu"};

function updatePlaylist(obj, artist, name) {
  return Object.assign(obj, {[artist]: name});
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist];
  return obj;
}
