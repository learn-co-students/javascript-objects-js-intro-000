var playlist = {
  warpaint: 'Love is To Die',
  bloodorange: 'EVP',
  Kanye: 'Gold Digger'
};

function updatePlaylist(playlist,artistName,song) {
  playlist['Phil Ochs'] = 'Here\'s to the State of Mississippi';
  return playlist
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye;
  return playlist;
};
