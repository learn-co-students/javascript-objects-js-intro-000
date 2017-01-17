var playlist = {
  Radiohead: "Lotus Flower",
  Nirvana: "Heart Shaped Box",
  NIN: "March of the Pigs"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
    return delete playlist[artistName];
}
