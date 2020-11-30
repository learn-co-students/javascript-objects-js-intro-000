var playlist = {
  tameImpala : 'The Less I Know The Better'
}
function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, {[artistName]: songTitle});
}
console.log (updatePlaylist(playlist, `Phil Ochs`, `Smile`));

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist;
}
console.log(removeFromPlaylist(playlist,`Phil Ochs`));
