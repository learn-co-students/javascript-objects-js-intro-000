var playlist = new Object({
  MichaelJ : 'Thriller',
  BritneySpears : 'Stronger',
  Prince : 'Purple Rain'
})
function updatePlaylist(playlist, artist, song){
  return Object.assign(playlist,{[artist]: song})
}
function removeFromPlaylist(playlist,artist){
  delete playlist[artist];

}
