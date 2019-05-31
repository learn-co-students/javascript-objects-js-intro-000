var playlist = { radiohead: "no surprises" };

function updatePlaylist(p, artist, song) {
  p[artist] = song
  return p
}

function removeFromPlaylist(p, artist) {
  delete p[artist]
  return p
}
