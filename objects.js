var playlist = new Object();

playlist = {
  // artist name: song title,
  'Paul McCartney & Wings': 'Band on the Run',
  'Led Zeppelin': 'Black Dog',
  'Queen': 'Bohemian Rhapsody',
  'Van Morrison': 'Brown Eyed Girl',
  'The Doors': 'Roadhouse Blues'
}

function updatePlaylist(obj, key, val) {
  return Object.assign({}, obj, { [key]: value })
}

function removeFromPlaylist(obj, key) {
  delete obj[key];
  return key
}

updatePlaylist('playlist', 'Lynyrd Skynyrd', 'Sweet Home Alabama');
removeFromPlaylist('playlist', 'Queen');
