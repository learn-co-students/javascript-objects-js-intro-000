var playlist = {
  'Slowdive': 'Allison',
  'My Bloody Valentine': 'Sometimes',
};


var updatePlaylist = (playlist, artistName, songTitle) => {
  playlist['Phil Ochs'] = 'Here\'s to the State of Mississippi';
  return updatePlaylist;
};

var removeFromPlaylist = (playlist, artistName) => {
  delete playlist['Slowdive'];
};