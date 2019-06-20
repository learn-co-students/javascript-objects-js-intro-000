var playlist = {
  'My Bloody Valentine': "a song",
  'beyonce': "love on top",
  'Slowdive': "something",
  'jonasBros': "sucker"
};

function updatePlaylist (playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
