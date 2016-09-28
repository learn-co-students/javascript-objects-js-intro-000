var playlist =  {
  artistName: 'song title'
};


function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(plalist, artistName){
  delete playlist.artistName;
  return playlist;
}
