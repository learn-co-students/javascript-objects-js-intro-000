var playlist = {artistName: "Movits!", songTitle: "Dansa i regnet"};

// var playlist = new Object({
//   artistName: "Salmo",
//   songTitle: "Don Medellin"
// });

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  //return playlist;
}

function removeFromPlaylist(playlist, artistName){
  //playlist[artistName] = songTitle;
  delete playlist.artistName;
  //delete playlist.artistName["Slowdive"];

  return playlist;
}
