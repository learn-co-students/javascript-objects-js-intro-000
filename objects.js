var playlist ={
  Slowdive : "Star Roving",
}
function updatePlaylist(playlist, name, title){
playlist[name] = title;
return playlist
}
function removeFromPlaylist(playlist, artistName){
delete playlist.Slowdive;
return playlist;

}
