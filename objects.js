var playlist = { prince: "purple rain" };

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

// updatePlaylist(playlist, 'u2', 'bloody sunday');
// console.log(playlist);
// console.log(removeFromPlaylist(playlist, 'prince'));
// //delete playlist.u2;
// console.log(playlist);
