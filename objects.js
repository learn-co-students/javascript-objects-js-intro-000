var playlist = {batmane: "We Run the Night", chrome: "Healer"}

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
   delete playlist[artistName];
}
// updatePlaylist(playlist, "gogo", "addy")
// removeFromPlaylist(playlist, "chrome");
//
// // delete playlist.Chrome;
// console.log(playlist);
