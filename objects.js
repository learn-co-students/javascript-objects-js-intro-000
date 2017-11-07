var playlist = {SnohAlaegar: "Time"};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle});
}
