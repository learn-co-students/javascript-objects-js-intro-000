var playlist = {
  singer1: 'sing1',
  singer2: 'sing2'

};

function updatePlaylist(object,artist,song){
  var artname = artist;
  object[artname] = song;
  return object;
}
function removeFromPlaylist(object,artist){
var name1 = artist;
  delete object[name1];
  return object;
}
