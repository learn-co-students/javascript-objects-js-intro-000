var playlist = new Object({Heho: "Song1"});

function updatePlaylist(obj,key,value){
  obj[key]= value;
  return obj;
}

function removeFromPlaylist(obj,key){
  delete obj[key];
  return obj;
}
