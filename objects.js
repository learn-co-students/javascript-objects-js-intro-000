var playlist = {Metallica: 'One'}

function updatePlaylist(object, string, value) {
  object[string] = value
  return object
}

function removeFromPlaylist(object, string) {
  delete object[string]
  return object
}