var playlist = {weezer: 'island in the sun', greenDay: 'brainstew'};

function updatePlaylist (object, artist, song) {
  object[artist] = song;
    return object;
}

function removeFromPlaylist(playlist1, artistName) {
  delete playlist1[artistName];
  return playlist1;
}