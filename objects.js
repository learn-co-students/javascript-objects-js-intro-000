var playlist=new Object({Eason: "Finally"});

function updatePlaylist(obj, artistName, songTitle){
  return Object.assign(obj,{[artistName]:songTitle});
}

function removeFromPlaylist(obj, name){
  delete obj[name];
  return obj;

}
