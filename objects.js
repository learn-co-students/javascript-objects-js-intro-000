var playlist = {Nujabes : 'Aruarian Dance', Moby : 'Flower', Little People : 'Start Shootin'}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle }); 
}

function removeFromPlaylist(playlists, artistName) {
  delete playlists.artistName;
  return playlists;
}