var playlist = {"My Bloody Valentine": "Hotline Bling", "Phil Ochs": "Only You", "Slowdive": "Dark Horse"}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
  return playlist;
}
