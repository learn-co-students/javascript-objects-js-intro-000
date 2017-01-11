var playlist = {artist : "title"};

function updatePlaylist(playlist, artist, title){
  playlist[artist] = title
  return playlist
}
function removeFromPlaylist(artist, title){
  delete playlist[artist];
  return playlist;
}
