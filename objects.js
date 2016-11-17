var playlist = {
  mozart: 'guitar',
  bach: 'organ',
  Kanye: 'Gold Digger',
}


function updatePlaylist(playlist, aritstName, songTitle){
  var songTitle = "Here's to the State of Mississippi"
  return Object.assign(playlist, { "Phil Ochs": songTitle })
}

function removeFromPlaylist(playlist, aritstName, songTitle){
  delete playlist.Kanye;
  return playlist
}
