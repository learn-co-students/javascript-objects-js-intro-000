var playlist = {
  GenericArtist: 'BlandSong'
}
var updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName] = songTitle
}
var removeFromPlaylist = (playlist,artistName) => {
  delete playlist[artistName]
}
