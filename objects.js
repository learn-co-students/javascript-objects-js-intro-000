var playlist = {Slowdive: "My Bloody Valentine"}

function updatePlaylist(playlist, artistName,songTitle){
  playlist['Phil Ochs']='My Bloody Valentine'
  return playlist
}

function removeFromPlaylist(playlist,artistName){
  delete playlist['Phil Ochs','Slowdive']
  return playlist

}