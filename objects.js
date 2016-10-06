var playlist = {
  Adelle : "Set fire",
  NWA : "Straight",
  FLorence: "Dogdays"
}
function updatePlaylist(obj, key, value){
  obj[key] = value;
  return obj;
}
function removeFromPlaylist(obj, key){
  delete obj[key];
  return obj;
}
