/*
1. Open `objects.js`
*/


/*
2. Assign an object to the variable `playlist` — the keys will be artist names and the values will be song titles.
 (What limitation does this impose on our `playlist`?)\
*/

var playlist = {names : "songs"};

/*
3. Create a function `updatePlaylist` that accepts three parameters:
the playlist (an object), an artist name (a string), and a song title.
The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the
 whole playlist.
*/

function updatePlaylist(obj, artistName, songTitle){

  obj[artistName] = songTitle;
  return obj;
}

/*
4. Create a function `removeFromPlaylist` that accepts two arguments
(the playlist object and the artist name). The body of the function should delete the
key-value pair from the playlist and return the updated playlist.
*/

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
