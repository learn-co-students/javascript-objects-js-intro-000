var playlist = {
  'Josie and the Pussycats': 'Some Song',
  'Bully': 'Some other Song'
}

function updatePlaylist(list, artist, title) {
  list[artist] = title
  return list
}

function removeFromPlaylist(list, artistName) {
 delete list[artistName]
 return list
}
