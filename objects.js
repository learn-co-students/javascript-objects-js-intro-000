var playlist = {};
playlist.artistName = "songTitle";

// Do not do a function expression, use function declarations only

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName]; 
    return playlist;
}
// var updatePlaylist = function (playlist, artistName, songTitle){
//   playlist.artistName:  artistName,
//   playlist.songTitle:   songTitle
// };
