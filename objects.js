var playlist = new Object({ Beatles: "Let it be" });
  function updatePlaylist(playlist, artist, song) {
  Object.assign({}, {playlist});
//    playlist[artist] = song;
    return playlist;
}
  function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist
}
