var playlist = {
  "My Bloody Valentine" : "Sometimes",
  "Phil Ochs" : "Here's to the State of Mississippi"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist["Slow Dive"] = "Alison"
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.["Slow Dive"]
  return playlist
}
