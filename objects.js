var playlist = { ACDC: 'Thunderstruck'};

function updatePlaylist( list, artistName, songTitle){
    list = playlist
     playlist[artistName] = songTitle
  }
function removeFromPlaylist(list,artistName){
  list = playlist
    delete playlist[artistName]
}
