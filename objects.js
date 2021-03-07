var playlist = {artistNames: 'songTitles'};

function updatePlaylist(playlist,artistName,songTitles){
 playlist[artistName] = songTitles;
 return playlist;
}
function removeFromPlaylist(playlist,artistName){
  delete playlist [artistName];
  return playlist;
}
