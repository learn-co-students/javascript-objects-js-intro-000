var playlist={};
playlist.Aylin = 'song'


function updatePlaylist(targetObject,artist,song){
  return Object.assign(targetObject,{[artist]:song})
}

function removeFromPlaylist(targetObject,artist){
  delete targetObject[artist];
  return targetObject
}
