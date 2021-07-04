var playlist = {'The Police': 'Roxanne'}
function updatePlaylist(playlist, name, title) {
  playlist[name] = title
  return playlist
}
function removeFromPlaylist(playlist, name) {
  delete playlist[name]
}
