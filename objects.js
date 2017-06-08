var playlist = {};
playlist.john = "imagine";

function updatePlaylist(playlist, artistName, songTitle) {
//var playlist = "playlist"
//var artistName = "britney"
//var songTitle = "oops"

  playlist[artistName] = songTitle;
  //playlist.artistName = songTitle;

}
updatePlaylist(playlist, "britney", "oops");

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}
removeFromPlaylist(playlist, "britney");
