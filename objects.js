var playlist = {
  taylorSwift : 'Should\'ve Said No',
  andrewSchubert: 'This Great Song',
  katieSchubert: 'Another Great Song',
}

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function removeFromPlaylist(obj, key) {
  delete obj[key]
  return obj
}
