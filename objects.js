var playlist = {
  prince: "when doves cry"
}
let updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
