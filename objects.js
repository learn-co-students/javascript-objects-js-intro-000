var playlist = new Object({Beach_House: 'Lazuli'});

function updatePlaylist(object,name,song){
  object = Object.assign({},object,{[name]:song});
  return object;
}

function removeFromPlaylist(object,name){
  delete object[name];
  return object
}
