var playlist = {
  artistName : songTitle
};
playlist();

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle

  return playlist
}

function removePlaylist(playlist, artistName, songTitle) {
  delete playlist.artistName

  return playlist
}
