var playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
};
//var artistName = "Phil Ochs";
//var songTitle = "Here's to the State of Mississippi";
function updatePlaylist(obj, key, value){
  obj[key] = value

  return obj
}
updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi")
console.log(playlist)

function removeFromPlaylist(obj, key){
  delete obj[key];
  return obj
}

removeFromPlaylist(playlist, "Slowdive")
console.log(playlist)
