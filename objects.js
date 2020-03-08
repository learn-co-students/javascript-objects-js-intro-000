let playlist = {
  Beyonce : 'Single Ladies',
  JLo: 'Get Loud'
}

function updatePlaylist(playList,artist,song){
  playList[artist] = song;

   return playlist;
}

function removeFromPlaylist(playList, artist){

  delete playList[artist];
}
