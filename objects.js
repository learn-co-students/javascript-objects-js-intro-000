var playlist = {artist : 'song'}

function updatePlaylist(playlist, artist, song) {
 playlist[artist] = song;
  return playlist;
}
function removeFromPlaylist(playlist,artistname) {
  delete playlist[artistname];
  return playlist
}