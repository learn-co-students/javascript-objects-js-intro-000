var playlist = {
  KanyeWest: 'Power',
  Greenday: 'American Idiot'};
function updatePlaylist(playlist, artist, title){
  playlist[artist] = title;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
console.log(removeFromPlaylist(playlist,'KanyeWest'));
