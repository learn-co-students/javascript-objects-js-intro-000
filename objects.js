var playlist = {
  artistName: "Jimi Hendrix",
  songTitle: "All Along the Watchtower",
};

function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle;
    return playlist;
  }

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
  playlist;
}
