var playlist = {demons:'imagine dragons'}

//function updatePlaylist(playlist,artistName,songTitle) {
//  return Object.assign(playlist,{[artistName]:songTitle})
//}

function updatePlaylist(obj,key,value) {
  return Object.assign(obj,{[key]:value})
}

function removeFromPlaylist(obj,key) {
  delete obj[key]
  return obj
}
