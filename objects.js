var playlist = { Chris_Brown : "Freaky Friday", Eminem: "Sing fo a Moment"};

var updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName] = songTitle;
}

var removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName];
}