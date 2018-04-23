let playlist = {
  Ariana: 'Be Alright',
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  let updatedPlaylist = delete playlist[artistName];
  return updatedPlaylist;
}
