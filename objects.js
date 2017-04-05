var playlist = {
  ABBA: "The Winner Takes It All",
  Sting: "Fields of Gold"
}


var updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName] = songTitle;
  return playlist;
}


var removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName];
  return playlist;
}

removeFromPlaylist(playlist, "Slowdive");
