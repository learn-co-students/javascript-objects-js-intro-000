var playlist =  new Object({artist: 'song'})

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { ['Phil Ochs']: "Here's to the state of Mississippi" })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
}
