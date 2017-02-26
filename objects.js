var playlist = {
  "Alla Pugacheva" : "Arlekino",
  "Lida Starshinova" : "LaLa",
  "Marina Star" : "LoLo"
};

function updatePlaylist (playlist, artist_name, song_title ){
  playlist[artist_name] = song_title;
  return playlist;
}

function removeFromPlaylist (playlist, artist_name ) {
  delete playlist[artist_name];
  return playlist;
}

