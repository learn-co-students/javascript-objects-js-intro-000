var playlist =  {Kanye: "Gold Digger" }

function updatePlaylist(playlist,artistname,songTitle){
  return  Object.assign({}, playlist, {[artistname]:songTitle});
}
function removeFromPlaylist(playlist,artistName){
  delete playlist.Kanye;
  return playlist;
}
