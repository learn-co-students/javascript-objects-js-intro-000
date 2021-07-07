var playlist = {
  "My Bloody Valentine": 'my heart will go on',
  "Phil Ochs": 'love me',
  "Slowdive": 'white flag',
}
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle })
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive
  return playlist
}
