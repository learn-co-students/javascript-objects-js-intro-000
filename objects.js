var playlist = { backstreetboys: "you_are_my_fire"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}



function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
    return playlist;
  }
