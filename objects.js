var playlist = {
  "Flanch": "Flanch",
  "Blood Orange": ["Cupid Deluxe", "Coastal Grooves", "Freetown Sound"],
  "Jessy Lanza": ["Oh No", "Pull My Hair Back"],
  "Tim Hecker": ["Virgins", "Love Streams"]
}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign(playlist, {[artistName]: songTitle})
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
