var playlist = {'Phil Ochs' : 'closer'
};
function updatePlaylist(playlist, artistName , songTitle) {
  return Object.assign({}, playlist, {[artistName]: 'songTitle'});
}
function removeFromPlaylist(playlist, artistName){
  var newPlaylist =  Object.assign({},playlist);
  delete playlist[artistName];
  return newPlaylist}
