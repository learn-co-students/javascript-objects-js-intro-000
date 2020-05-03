//defines an object called `playlist` containing at least one artist-song pair
var playlist = {artist: 'song'}

//updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist

}

//removeFromPlaylist(playlist, artistName) removes `artistName` from `playlist`
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
