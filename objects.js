var playlist = {Nickelback: 'Rockstar'};

var updatePlaylist = (playlist, artistName, songTitle) => {

  return Object.assign(playlist, {[artistName]: songTitle})
}

const removeFromPlaylist = (playlist, artistName) => {

  return delete playlist[artistName];

}
