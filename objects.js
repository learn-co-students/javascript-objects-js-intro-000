
var playlist = {
  artistName: "Michael", songTitle: "Slowdive"
};
var playlist = {
  artistName: "Mariah", songTitle: "My Bloody Valentine"
};
var playlist = {
  artistName: "Beyonce", songTitle: "Phil Ochs"
};

function updatePlaylist (playlist, artistName, songTitle){
playlist[artistName] = songTitle;
return playlist;
};

function removeFromPlaylist(Playlist, artistName) {
  delete Playlist[artistName];
  return updatePlaylist;

};
