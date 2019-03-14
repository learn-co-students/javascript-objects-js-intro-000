// var playlist = {
//   prince: 'corvette'
// };

var playlist = new Object({ prince: 'corvette' });

function  updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = 'songTitle';
  return  playlist;
}

function  removeFromPlaylist(artistName, playlist)  {
  delete artistName[playlist];
  return  playlist;
}

function  removeFromPlaylist(artistName, playlist)  {
  delete artistName[playlist];
  return  playlist;
}
