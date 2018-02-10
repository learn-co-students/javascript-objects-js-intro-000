var playlist = new Object({ artist: "song" });

function updatePlaylist(playlist, artist, song){ 
  playlist['Phil Ochs'] = 'song';
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}