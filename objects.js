var playlist = {
  artist: `song`
}

//three parameters: the playlist (an object), an artist name (a string), and a song title.
//The body of the function should add the song and artist as a key-value pair to the playlist object.
//The function should return the whole playlist.

function updatePlaylist(playlist, artistname,songtitle){
  return Object.assign(playlist, {[artistname]:songtitle})
}


function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
} 
