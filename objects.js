var playlist = {};
var playlist = {
  artistName: 'The Verve',
  songTitle: 'On Your Own'
}

function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle
    return playlist
  }

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}
