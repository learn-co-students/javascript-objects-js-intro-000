var playlist = {"Slowdive": "Alison", "My Bloody Valentine": "Sometimes"};

var updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName] = songTitle
  return playlist
}

updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi")

var removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName];
  return playlist
}

removeFromPlaylist(playlist, "Slowdive")
