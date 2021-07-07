var playlist = {
  "My Bloody Valentine" : "Sometimes",
  "Phil Ochs" : "Here's to the State of Mississippi"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist["Slowdive"] = "Alison"
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist["Slowdive"]
  return playlist
}
