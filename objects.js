
var playlist = { artistName: "Halleluah" };

//objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:

// return (playlist = { artistName: songTitle })
// object is playlist
//key is artistName
//value is songTitle

// playlist = {[artistName]:songTitle
//   playlist[artistName],playlist[songTitle]
//   playlist[artistName] = playlist[songTitle]

function updatePlaylist (playlist, artistName, songTitle) {
// return  (playlist[artistName] = playlist[songTitle])
playlist[artistName] = songTitle
return playlist
}

function removeFromPlaylist(playlist, artistName) {
  // return (delete playlist[artistName])
  delete playlist[artistName]
  return playlist
}
