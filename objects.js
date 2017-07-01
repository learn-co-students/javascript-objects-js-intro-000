var playlist = {
  GratefulDead: 'Althea',
  WarrenZevon: 'Desperados Under the Eaves'
}

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}

function removeFromPlaylist(obj, key) {
  delete obj[key]
  return obj
}
