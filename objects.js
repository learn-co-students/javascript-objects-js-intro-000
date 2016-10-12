var playlist = { 'Cher':'If I Could Turn Back Time'};

function updatePlaylist(obj, artist, title) {
  return Object.assign({}, obj, { [artist]: title });
}

function removeFromPlaylist(obj, artistName) {
  delete obj[artistName];
  return obj;
}
