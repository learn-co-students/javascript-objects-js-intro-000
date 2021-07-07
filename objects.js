var playlist = {
'Jackson' :'I Love you',
'Rogue' : 'Come get me'

};
function updatePlaylist (playlist, name, title){
  playlist[name] = title;
  return playlist;
}

function removeFromPlaylist(playlist, name){
  delete playlist[name];
  return playlist;
}
