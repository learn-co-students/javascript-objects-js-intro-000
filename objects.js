var playlist = {'King': 'song'}

function updatePlaylist(playlist, artist, song ){

  playlist[artist] = song
  console.log(playlist)
  return
}


function removeFromPlaylist(playlist, Slowdive){
  return  delete playlist.Slowdive

}
