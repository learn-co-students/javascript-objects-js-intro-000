/*jshint esversion: 6 */

  var playlist = {
    artist: 'Paint it Black'
  };

  var updatePlaylist = (playlist, artistName, songTitle) =>{
    return  Object.assign(playlist, {[artistName]: songTitle});
  };

  var removeFromPlaylist = (playlist, artistName) =>{
    delete playlist[artistName];
  };
