var playlist = {
  'Michael Jackson': 'lets get it',
  'chief': 'oo',
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist, song) {
  delete playlist[artist];
  return playlist
}

// Create a function updatePlaylist that accepts three parameters: the playlist (an object), an artist name (a string)
//, and a song title. The body of the function should add the song and artist
// as a key-value pair to the playlist object. The function should return the whole playlist.
