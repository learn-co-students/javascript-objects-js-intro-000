var playlist = {
Cher: "Do You Believe?",
};

/*3. Create a function `updatePlaylist` that accepts three parameters:
the playlist (an object), an artist name (a string), and a song title.
The body of the function should add the song and artist as a key-value pair to
 the playlist object. The function should return the whole playlist.
*/
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
};

/*4. Create a function `removeFromPlaylist` that accepts two
arguments (the playlist object and the artist name). The body
of the function should delete the key-value pair from the playlist
 and return the updated playlist.*/
 function removeFromPlaylist(playlist, artistName){
   delete playlist[artistName];
   delete playlist.artistName;
  return playlist;
};
