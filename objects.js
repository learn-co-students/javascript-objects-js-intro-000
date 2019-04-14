function updatePlaylist(obj, key, value){
  return Object.assign(obj, {[key]: value});
}
function removeFromPlaylist(obj, key){
  delete obj[key] ;
  return obj ;
}
var playlist = { yasuharuTakanashi : 'gentleHands'}
updatePlaylist(playlist, 'matsushitaYuya', 'hallucination');
removeFromPlaylist(playlist, 'matsushitaYuya');
