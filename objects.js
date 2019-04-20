var playlist = {"KISS": "Beth"};

function updatePlaylist(object, newArtist, newSong) {
  //var newPlaylist = Object.assign({}, object, {[newArtist]: newSong});
  return Object.assign(object, {[newArtist]: newSong});
};

function removeFromPlaylist(object, artist) {
  //console.log(object.artist);
  //object.artist = undefined;
  //console.log(object.artist);
  delete object[artist];
  //console.log(object);
  return object;
}
