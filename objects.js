var playlist = new Object({name: "Title"})

function updatePlaylist(play, name, songTitle){
    return Object.assign({}, play, {[name]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist
}
