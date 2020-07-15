var playlist = {
'artist': 'song'
}

function updatePlaylist(obj, artist, song) {
  //add the song and artist as key value
  var newKeyPair = {};
  newKeyPair[artist] = song;
  //return whole playlist


  return Object.assign(obj, newKeyPair);

  // return updatedPlaylist;
}


function removeFromPlaylist(obj, artist) {
  //delete keu value pair
  return delete obj[artist];



  //return updated playlist obj
}
