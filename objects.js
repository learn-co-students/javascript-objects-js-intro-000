var playlist={shaheer: "amsterdam", imaginedragons: "hear me"};

function updatePlaylist(playlist, artistName, songTitle){
  object.assign({}, playlist, { [artistName]: songTitle});
return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist
}
