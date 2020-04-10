
var playlist = {"My Bloody Valentine": "Sometimes"}

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
  playlist.Slowdive = 'Alison'
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive
  return playlist
}
