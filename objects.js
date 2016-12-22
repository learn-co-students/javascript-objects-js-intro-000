var playlist = {
  radiohead: "creep"
}

function updatePlaylist (object, artistName, song) {
  object[artistName] = song;
  return object;

}

function removeFromPlaylist (object, artistName) {
  delete object[artistName];
  return object;
}
