var playlist = {
  'My Bloody Valentine' : 'Sometimes',
  'Phil Ochs' : "Here's to the State of Mississippi"
};

var updatePlaylist = (playlist, artist, trackName) => {
  return Object.assign({}, playlist, {artist : trackName});
}

var removeFromPlaylist = (playlist, artist) => {
  delete playlist[artist];
}
