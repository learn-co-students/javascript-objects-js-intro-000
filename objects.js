var playlist = {
  EdSheeran: "Like a river",
  NeonTrees: "Everybody talks"
}
function updatePlaylist(object, key, value) {
  object[key] = value
  return object
}
function removeFromPlaylist(object, key) {
  delete object[key]
  return object
}
