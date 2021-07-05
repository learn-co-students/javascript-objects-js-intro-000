// define object "playlist"
var playlist = {eminem: 'Lose Yourself'};

// adds a key-value pair to playlist object
function updatePlaylist(list, artistName, songTitle) {
  list[artistName] = songTitle;
  return list;
}

// removes a key-value pair from playlist object
function removeFromPlaylist(list, artistName) {
  delete list[artistName];
  return list;
}
