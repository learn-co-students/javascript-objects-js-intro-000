var playlist= {Radiohead: "Knives Out"};

function updatePlaylist (playlist, Radiohead, song){
  playlist[Radiohead]="The Bends"
  return playlist
}

function removeFromPlaylist (playlist,artistName){
  delete playlist[artistName]
  return playlist
}
