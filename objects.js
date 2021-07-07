//create a object
var playlist = { artist: "name of song"};

function updatePlaylist (playlist, artistName, songTitle){

// to add to an object/ there are several ways to do those
//        key           value
playlist[artistName] = songTitle

  return playlist
}


function removeFromPlaylist(playlist, artistName){

  delete playlist[artistName]

  return playlist
}
