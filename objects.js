var playlist = {Yaani : "A Little Too Late"};
function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}