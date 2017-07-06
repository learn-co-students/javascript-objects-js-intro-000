var playlist = {MichaelJackson: ["waking dead", 'wishes'], Rihanna: "chandelier"};

function updatePlaylist (obj, artistName, songTitle) {
  obj[artistName] = songTitle;
  return obj
}

function removeFromPlaylist(obj, artistName) {
  delete obj[artistName];
  return obj
}
