var playlist = {};

var updatePlaylist = function (obj, artist, song) {
  obj[artist] = song;
  return obj
};

updatePlaylist(playlist, "Prince", "Purple Rain");
updatePlaylist(playlist, "Michael Jackson", "Beat It");
updatePlaylist(playlist, "Juanes", "A Dios Le Pido");


var removeFromPlaylist = function(playlist, artist) {
  delete playlist[artist];
  return playlist;
};

removeFromPlaylist(playlist, "Juanes");
