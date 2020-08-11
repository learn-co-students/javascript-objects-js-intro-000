var playlist = {eltonJohn: "Tiny Dancer"}

var updatePlaylist = (playlist, artistName, songTitle) => {
  return Object.assign({}, playlist, {artistName: [songTitle})
}
