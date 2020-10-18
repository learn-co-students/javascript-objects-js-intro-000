/*var meals ={}

var meals = new Object();

var playlist = new Object({keys: '0'});
var playlist = {
  metallica: "Fuel",
  ozzy: "Paranoid",
  guns: "Patience"
}

function updatePlaylist (playlist, artistName, songTitle ) {
  playlist.skidRow = 'Eighteen';
  //return playlist();
}

function removeFromPlaylist (playlist, artistName,) {
   delete playlist[artistName]
   return playlist
 }*/
 var playlist = new Object({keys: '0'});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
