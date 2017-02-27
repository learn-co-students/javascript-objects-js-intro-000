var playlist = {
  toto: 'africa',
  neilYoung: 'rust never sleeps'
}

function updatePlaylist(playlist, nsync, byebyebye){
  playlist[nsync] = byebyebye
  return playlist
}

function removeFromPlaylist(playlist, neilYoung){
  delete playlist.Slowdive;
  playlist;
}
