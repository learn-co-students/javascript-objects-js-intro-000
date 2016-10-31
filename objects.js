
var playlist = {key:'value'};
//typeof(playlist);
function updatePlaylist(playlist,artistName,songTitle) {
  console.log(playlist,artistName,songTitle);
  playlist[artistName]= `${songTitle}`;
  return(playlist)

}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName];
  return(playlist) 
}
