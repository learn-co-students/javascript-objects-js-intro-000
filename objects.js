var playlist = new Object();
playlist.madonna = 'Hello, hello';

function updatePlaylist(list,artist,song){
  list[artist] = 'song';
  return list
}

function removeFromPlaylist(list,artist){
  delete list[artist];
  return list
}
