var playlist = {
  michaelJackson: "Beat it",
  madonna:"Hang up",
  linkinPark:"In the End"
};

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist;
}
