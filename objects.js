var playlist = {artistName: "songTitle"}

function updatePlaylist(playlist, artistName, songTitle) {
  return Playlist.assign({}, playlist, { [artistName]: songTitle })
}
