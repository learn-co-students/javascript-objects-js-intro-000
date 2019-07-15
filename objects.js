var playlist =
  {
  'Artist1': 'Song1',
  'Artist2': 'Song2'
  }

function updatePlaylist(obj, key, value)
  {
    obj[key] = value
    return obj
  }

function removeFromPlaylist(obj, key)
  {
    delete obj[key]
    return obj
  }
