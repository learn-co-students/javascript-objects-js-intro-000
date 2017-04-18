var playlist = {
  thePlotInYou: "My Old Ways",
};

function updatePlaylist(obj, artistName, songTitle) {
   obj[artistName] = songTitle;
   return obj;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}
