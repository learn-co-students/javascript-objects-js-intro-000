var playlist = {artist: 'Song Title'};

function updatePlaylist(list, artist, title) {
  return Object.assign( {}, list, {[artist]: title} )
}

function removeFromPlaylist(list, artistName) {
 delete list[artistName]
 return list
}
