var playlist = {'Phil Ochs': "Here's to the State of Mississippi"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

updatePlaylist(playlist, 'Kanye', 'Gold Digger')

function removeFromPlaylist(playlist, artistName){
  delete playlist.Kanye

  return playlist
}
