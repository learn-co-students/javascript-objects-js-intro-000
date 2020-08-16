var playlist = {
  stoneTemplePilots: "Meatplow",
  nirvana: "Smells Like Teen Spirit",
  pearlJam: "Black"
};

function updatePlaylist(a, b, c) {
  a[b] = c
};

function removeFromPlaylist(a, b) {
  delete a[b];
}
