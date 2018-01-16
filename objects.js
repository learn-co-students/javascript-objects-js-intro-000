var playlist = new Object;
playlist ={artist:'Madonna', song:'musical'};


function updatePlaylist(playlist,artistName, songTitle) {
  playlist[artistName]=songTitle;
};


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
