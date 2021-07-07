var playlist = {
  "The Flaming Lips":"She don't use jelly"
}
function updatePlaylist(list, artist, song){
  list[artist] = song
  return list
}

function removeFromPlaylist(list, artist){
  delete list[artist]
  return list
}
