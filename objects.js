var playlist = {Amos: "keep it loose, keep it tight"};

function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign(playlist, { [artistName]: songTitle })
}

updatePlaylist(playlist, "Slowdive", "When the Sun Hits");
updatePlaylist(playlist, "My Bloody Valentine", "Good Charlotte");
updatePlaylist(playlist, "Phil Ochs", "There but for Fortune");

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

removeFromPlaylist(playlist, "Slowdive");
