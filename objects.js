var playlist = { flume : "sleepless" };
//limitation is that an artist can't have more than one song on the playlist
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  return playlist
}
