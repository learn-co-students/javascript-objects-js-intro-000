var playlist = {
  Chance: "Acid Rain"
};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}
