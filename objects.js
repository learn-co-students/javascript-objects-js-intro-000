
var playlist = {Mozart: "Symphony 40"}

function updatePlaylist(list, k, v) {
  Object.assign(list, {[k]:v});
}

function removeFromPlaylist(list, k) {
  delete list[k];
}
