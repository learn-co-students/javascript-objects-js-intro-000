var playlist = {};
function updatePlaylist(obj, artistName, songTitle) {
  obj.artistName = songTitle;
}
function removeFromPlaylist(obj, artistName) {
  delete obj.artisName;
  return obj;
  
}