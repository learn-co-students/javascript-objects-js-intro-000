var playlist = new Object({'Sara Bareilles' : 'Gravity'})

function updatePlaylist(play, name, title) {
  play[name] = title
}

function removeFromPlaylist(play, name) {
  delete play[name]
  return play
}
