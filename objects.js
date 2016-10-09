

var playlist = new Object ({
  'The Bag Raiders': 'Sunlight',
  'Red Hot Chili Peppers': 'Snow',
  'Paul Oakenfold': 'Starry Eyed Surprise'
})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
delete playlist[artistName];
return playlist;
}
