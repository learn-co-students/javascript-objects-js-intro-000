var playlist = { artist : 'song'};

function updatePlaylist(object, key, value){
  object[key]=value;
  return object;
}

function removeFromPlaylist(playList, song ){
  
  delete playList[song];
  return playList

}
