var playlist = {
  'hendrix': 'Along the Watchtower'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
