var playlist = {queens_of_the_stone_age:"First it Giveth"};

function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign(playlist,{[artistName]:songTitle})
}
function removeFromPlaylist(playlist,artistName){
   delete playlist[artistName];
return playlist;
}
