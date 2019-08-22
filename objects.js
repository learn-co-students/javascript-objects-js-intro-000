var playlist = { fleetwoodmac: "albatross" };

function updatePlaylist(obj, artist, title) {
  Object.assign(obj, {[artist]: title});
  return obj
}

function removeFromPlaylist (obj, artist) {
    delete obj[artist];
    return obj
}
