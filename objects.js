var playlist =
    {
      artist:"song"
    }
var updatePlaylist = (playlist, artistName, songTitle) =>
    {
      return Object.assign(playlist, {[artistName]: songTitle});
    }
var removeFromPlaylist = (playlist, artistName) =>
    {
      delete playlist[artistName];
      return playlist;
    }
