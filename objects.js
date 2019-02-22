
var playlist = { };
playlist['Elvis Costello'] = 'Radio Radio';

function updatePlaylist(pl, artist, song) {
  pl[artist] = song;
}

function removeFromPlaylist(pl, artist) {
  delete pl[artist];
}
