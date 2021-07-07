var playlist = new Object ({artistName: 'James Taylor', songTitle: 'Fire and Rain'});

function updatePlaylist(obj, artistName, songTitle) {
  obj[artistName] = songTitle
  return obj;
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");

function removeFromPlaylist(obj, artistName) {
  delete obj[artistName];
}
removeFromPlaylist(playlist, 'Slowdive');
