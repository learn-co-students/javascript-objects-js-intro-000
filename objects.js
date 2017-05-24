// 2. Assign an object to the variable `playlist`
//
//  and initialize the object with a key-value pair
//  — the keys will be artist names and the values will be song titles.
//   (What limitation does this impose on our `playlist`?)


var playlist = {
artistName: 'songTitle',
}

function updatePlaylist(playlist, artistName, songTitle){
playlist[artistName] = songTitle;
return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
