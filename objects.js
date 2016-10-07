var playlist = {"artist1":"name1", "artist2":"name2","artist3":"name3"};

function updatePlaylist(obj, artist, song) {
  obj[artist] = song;
  return obj;
}

function removeFromPlaylist(obj, artist) {
  delete(obj[artist]);
  return obj;
}
