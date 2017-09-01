var playlist = {Drake: "Hotline Bling", Goldlink: "Get Your Link On", Asap: "Kissin Pink"}

function updatePlaylist(playlist,artist,title){
  playlist[artist]= title;
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}
