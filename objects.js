var playlist = {
  artist:  "Here is my song",
  address: "12 Beach Front"
};

function updatePlaylist(obj, name, song) {
  obj[name] = song;
  return obj;
};

function removeFromPlaylist(obj, name) {
  delete obj[name];
  return obj;
};
