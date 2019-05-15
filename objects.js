var playlist = {
  artist:"AbdelHalim",
  song: "Gana El Hawa"
}
function updatePlaylist(playlist, artistName, songTitle){
 playlist[artistName] = songTitle;
}
function removeFromPlaylist(playlist, artistName){
 delete playlist[artistName];
}
