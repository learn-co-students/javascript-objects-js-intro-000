var playlist = {wiz: "on my level" };

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName){
   delete playlist[artistName];
   return playlist
  
  
}
