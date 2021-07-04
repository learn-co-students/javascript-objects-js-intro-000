var playlist = {
  'Kacey Musgraves': "High Horse",
  DaBaby: "Baby Sitter",
  Logic: "BOBBY"
};

function updatePlaylist(playlist, artist, song){
  playlist[artist]=song;
  return playlist;
};

function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
  return playlist;
}
