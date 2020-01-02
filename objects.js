// Assign an object to the variable playlist and initialize the object with a key-value pair
// — the keys will be artist names and the values will be song titles.

var playlist = new Object();
playlist = { artistName: 'songTitle'};

// Create a function updatePlaylist that accepts three parameters: the playlist (an object), an artist name (a string), and a song title.
// The body of the function should add the song and artist as a key-value pair to the playlist object.
// The function should return the whole playlist.

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  playlist;
  return playlist;
}
