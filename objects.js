var playlist = { 
  
  Shakira: "Hips don't lie", 
  Psy: "GangnamStyle"
};


function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]= songTitle;
  return playlist;
}


function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}