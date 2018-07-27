var playlist = {
  PearlJam: 'Black',
  Soundgarden: 'Spoon Man',
  Rush: '2112',
  Metallica: 'One'
};

function updatePlaylist(list, artistName, songTitle){
  list[artistName] = songTitle
  return list
}


function removeFromPlaylist(list, artistName){
  delete list[artistName];
  return list;
}
