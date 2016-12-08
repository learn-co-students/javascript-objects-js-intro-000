//var playlist = { Kanye: "Gold Digger" };
var playlist = {b52: "Rock Lobster", blondie: "call me"}
//playlist
//{b52: "Rock Lobster"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle
  //return Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
