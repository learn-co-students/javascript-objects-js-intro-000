playlist = { artist: "song" }


function updatePlaylist(object, artist, song) {
  return Object.assign({}, { "Phil Ochs": song })
}

function removeFromPlaylist(object, artist) {
  delete playlist.artist;
  return playlist
}
