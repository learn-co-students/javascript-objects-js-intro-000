
var playlist = {
  'Phil Ochs': 'My Bloody Valentine',
  Switchfoot: 'Daisy'
}

function updatePlaylist(playlist, artistName, songTitle)   {

  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
