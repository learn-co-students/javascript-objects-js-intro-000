var playlist = {Nirvana: "Smells Like Teen Spirit"};

function updatePlaylist(playlistObj, artistStr, song) {
  return Object.assign(playlistObj, {[artistStr]: song});
}

function removeFromPlaylist(playlistObj, artistStr) {
  delete playlistObj[artistStr];
  return playlistObj;
}
