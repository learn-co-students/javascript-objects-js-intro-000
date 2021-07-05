
var playlist =
{
//  My Bloody Valentine: "Sometimes",
  //Phil Ochs: "Here's to the State of Mississippi" ,
  Slowdive: 'Alison'
};


function  updatePlaylist( obj , artistName, songTitle  ){
  obj[artistName ] = songTitle;
  return  obj  ;
}

function updatePlaylist ( obj , artistName, songTitle  ){
  obj[artistName ] = songTitle;
  return obj;
}

function removeFromPlaylist (obj , songTitle ) {
  delete obj[songTitle];
  return obj;
}
