var playlist = {"Jimi Hendrix": "Song 1"};

function updatePlaylist(playlistObject, artistName, songTitle) {
  return playlistObject[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist[artistName];
}
