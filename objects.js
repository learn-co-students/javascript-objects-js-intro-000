var playlist = { "My Bloody Valentine": "When You Sleep",
  "Phil Ochs": "When I'm Gone",
  "Slowdive": "Sugar For the Pill"
}

function updatePlaylist(playlist, artistName, songTitle) {
    playlist["Red Hot Chili Peppers"] = "Otherside";
    return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
