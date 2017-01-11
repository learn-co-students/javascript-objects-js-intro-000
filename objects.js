var playlist= { katy: 'The One That Got away', taylor: 'teardrops on my guitar', aerosmith: 'dont wanna miss a thing'};
//var playlist = {artistName: songTitle}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
