var name
var title
var playlist = new Object({name, title});
function updatePlaylist(playlist, name, title){
return Object.assign(playlist, {[name]: title});
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}
