var playlist = {cher: 'Do you believe'}
function updatePlaylist(obj, str, title) {
  obj[str] = title;
  return obj;
}
function removeFromPlaylist(obj, title) {
  delete obj[title];
}
