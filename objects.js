var playlist = {"The Beatles": "Blackbird", Radiohead: "Just", "Kanye West": "Good Morning"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

/* var playlist = {
  Pink:"Just Like Fire"
  Slowdive: "Alison"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName]="songTitle";
};

function removeFromPlaylist (playlist, Slowdive) {
  delete playlist.Slowdive;
  return playlist;
} */
