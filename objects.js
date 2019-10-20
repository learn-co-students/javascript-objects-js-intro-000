var playlist = {
  'Alison': 'My Bloody Valentine', 'Phil Ochs': 'Here\'s to The State of Mississippi'
}

function updatePlaylist(playlist, artistName, songTitle) {

  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
//function updatePlaylist(playlist, artistName, songTitle) {

  //playlist[artistName] = songTitle

  //return playlist
//}
//function updatePlaylist (playlist, artistName , songTitle) {
 //playlist[artistName] = songTitle
 //return playList
//}
