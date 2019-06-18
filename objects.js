var playlist = {
  artistName: "artist-song"
};

var updatePlaylist = function(playlist, artistName, songTitle){
  return Object.assign(playlist, { [artistName]: songTitle })
}

var removeFromPlaylist = function(playlist, artistName){

}
