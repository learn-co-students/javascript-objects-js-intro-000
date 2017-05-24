var playlist = {
  neyo: "song name"
}

function updatePlaylist(playlist, artistName, songTitle) {
  // var playlistTest = {
  //   [artistName]: songTitle
  // }
  return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName]

    return playlist;
    //return playlist
}
