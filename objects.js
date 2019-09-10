
var playlist= {'Lana Del Rey': 'Video games'};
function updatePlaylist(playlist, billieEilish, whenThePartyIsOver){
  playlist[billieEilish]= whenThePartyIsOver
  return playlist;
}
function removeFromPlaylist(playlist,billieEilish){
  delete playlist[billieEilish]
  return playlist;
}
