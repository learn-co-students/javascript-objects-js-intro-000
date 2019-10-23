var playlist = {lee: "nakyung"};

function updatePlaylist(object,artistName,title){
  object[artistName] = title;
  return object;
}

function removeFromPlaylist(object,artistName){
  delete object[artistName];
  return object;
}
