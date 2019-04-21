var playlist = {
  'My Bloody Valentine': 'songtitle',
  'Phil Ochs': 'songtitle',
  'Slowdive': 'songtitle'
}

function updatePlaylist(playlist, artistName, songtitle) {
 return Object.assign({}, playlist, { [artistName]: songtitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
}