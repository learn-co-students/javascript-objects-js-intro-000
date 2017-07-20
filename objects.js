var playlist = {
  Anamanaguchi: "Pop it",
  Teddyloid: "Me!Me!Me!"
}

function updatePlaylist(object, key, value){
  object[key] = value
  return object
}

function removeFromPlaylist(object, key){
  delete object[key];
  return object;
}
