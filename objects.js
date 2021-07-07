var playlist = {"Phil Ochs": "stronger"}

var key= "string"
var value ="string1"

function updatePlaylist(playlist, key, value) {
  playlist["key"]= "value"
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
