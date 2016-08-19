//create object titled playlist to hold artist names as keys and song names as values
var playlist = {Vulfpeck:"Wait for the Moment"};

function updatePlaylist(playlist, artistName, songTitle){
     playlist[artistName] = songTitle;
    return playlist;
}

function removeFromPlaylist(playlist, artistName){
      delete playlist[artistName];
      return playlist;
}
