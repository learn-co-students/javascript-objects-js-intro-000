var playlist = {
  Madonna: 'Vogue',
  Cher: 'Believe'
};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

var playlist = {Kanye: "Gold Digger"}
function removeFromPlaylist (playlist, artistName) {
  //delete key-value pair from playlist
  delete playlist.Kanye;
  return playlist
}
