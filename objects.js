var playlist = new Object({Artiste : "Daft Punk", Song : "Da Funk"})
 ;

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, { [artistName]: songTitle });
};

function removeFromPlaylist(playlist, artistName){
 delete playlist[artistName];
  return playlist;
}
