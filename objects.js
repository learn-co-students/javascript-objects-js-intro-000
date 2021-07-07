var playlist = {
  leonardCohen: "Hallelujah"
}

function updatePlaylist(plst, artist, song){
  plst[artist] = song
  return plst
}

function removeFromPlaylist(plst, artist){
  delete plst[artist]
  return plst
}
