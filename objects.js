var playlist = {Bts:"boy in love",exo:"loveshot",blackpink:"kill this love"}

function updatePlaylist(playlist,artistName,songTitle){
   playlist[artistName] = songTitle;
   return playlist

}
function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}
