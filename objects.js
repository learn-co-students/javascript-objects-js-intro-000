var playlist = new Object();
const artist = 'JT'
playlist[artist] = "Can't stop the feeling"

function updatePlaylist(obj, artistName, songTitle) {
return Object.assign( obj, {[artistName]:songTitle})
}


function removeFromPlaylist(obj, artistName) {
  delete obj[artistName]
  return obj
}