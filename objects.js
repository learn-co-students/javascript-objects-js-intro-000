var playlist = {
  artist1 : 'song 1',
  artist2 : 'song 2'
}

function updatePlaylist(obj, key, value){
  obj[key] = value
  return obj
}

function removeFromPlaylist(obj, key){
  delete obj[key]
  return obj
}
