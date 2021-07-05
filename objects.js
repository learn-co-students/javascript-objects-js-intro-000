var playlist = {artistName: "Milo",
                songTitle: "have fun"
};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = artistName;
  playlist[songTitle] = songTitle;
}

function removeFromPlaylist(playlist, artistName){

  delete playlist[artistName]

  return playlist;
}
