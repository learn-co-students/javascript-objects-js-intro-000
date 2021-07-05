const playlist = { Slowdive: "My Bloody Valentine" };



function updatePlaylist(playlist, artistName, songTitle) {
  playlist [artistName] = "Phil Ochs";
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  return playlist;
}
