var playlist = { Yes: 'Roundabout'}

var updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName] = songTitle
  return playlist
}
