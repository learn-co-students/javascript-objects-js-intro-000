var playlist={
'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes',

}
function updatePlaylist(obg,name,song){
 obg[name]=song;
//  Object.assign({},obj,name:song);
  return obg;
}

function removeFromPlaylist(playlist,name){
  // if(obg.name) delete obg[name];
// Object.assign({},obg,name);
 delete playlist[name];
  return playlist;
}
