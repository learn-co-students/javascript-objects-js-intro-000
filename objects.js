var playlist = { artistName: 'songTitle' };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}


//The body of the function should add the song
//and artist as a key-value pair to the playlist object.
//The function should return the whole playlist.

//Create a function removeFromPlaylist which accepts
//two arguments (the playlist object and the artist name).
//The body of the function should delete the key-value pair
//from the playlist and return the updated playlist.
