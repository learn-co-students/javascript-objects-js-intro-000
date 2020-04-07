let playlist={
  nellyFurtado: "Promiscous girl",
  drake: "Jungle",
};

function updatePlaylist(playlist, artistName,songTitle){
  playlist[artistName]=songTitle;
  return playlist
};

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist;
}
