var playlist = { 'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes'
};

function updatePlaylist(obj, key, value) {
  return Object.assign(obj, { [key] : value });
}

function removeFromPlaylist(obj, name) {
  delete obj[name];
  return obj;
}
