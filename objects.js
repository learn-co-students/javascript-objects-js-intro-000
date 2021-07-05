var playlist = {
  beatles: "yellow submarine"
};

function updatePlaylist(object, artistName, songTitle){
  object[artistName]= songTitle;
  return object;
}

console.log(updatePlaylist(playlist,"Slowdive","whoknows"));

function removeFromPlaylist(object, artistName){
  delete object[artistName];
  return object;
}

console.log(removeFromPlaylist(playlist,"Slowdive"));
