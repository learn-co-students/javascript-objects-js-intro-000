var playlist = { [ artistName ]: ("Slowdive", "My Bloody Valentin", "Phil Ochs")};

var songTitle = {[artist]: ("song1", "song2", ..."song3")};

function updatePlaylist(Playlist, artistName, songTitle) {
  return Object.assign({}, Playlist, { [artistName]: songTitle});
}

 updatePlaylist(playlist, "artist4", "song4");

function removeFromPlaylist(Playlist, artistName) {
  delete Playlist[artistName];
  return Playlist;
}

removeFromPlaylist(playlist, "artist2");
