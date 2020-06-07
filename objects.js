//Assign an object to the var playlist and initialize the object with a key-value pair
//the keys will be artist names and the values will be song titles
var playlist = {artistName: "songTitle" }

//three parameters: the playlist (an object), an artist name (a string), and a song title
//body of the function should add the song and artist as a key-value pair to the playlist object
//function should return the whole playlist
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

//accepts arguments playlist object & artist name
//body of function should delete the key-pair value from the playlist
//should return the updated playlist
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
