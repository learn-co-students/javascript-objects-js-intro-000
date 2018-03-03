var playlist = {
  Adele: "Hello",
  Elevation: "There is a Cloud",
  Ed_Sheeran: "Perfect"
};

function updatePlaylist (obj, key, value){
  obj[key] = value
  return obj
};

updatePlaylist (playlist, "Slowdive", "Alison");

function removeFromPlaylist (playlist, artist){
  delete playlist[artist]
  return playlist
};

removeFromPlayList (playlist, "Slowdive")
