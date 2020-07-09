var playlist={
  SidhuMooseWala:["Dhakka","Famous"]
}
var updatePlaylist= (playlist,key,value) =>{
  Object.assign(playlist,{[key]:value})
  return playlist;
}
var removeFromPlaylist= (playlist,key) =>{
  delete playlist[key];
  return playlist;
}
