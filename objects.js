var playlist = {JerryRivera: 'Cara de niño'};

function updatePlaylist(playlist, artistName,songTitle)
{
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist,artistName){
  return  delete playlist[artistName];
}
