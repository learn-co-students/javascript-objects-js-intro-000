var playlist = { artist: "song" };
/*Assign an object to the variable playlist and initialize the object with a key-value pair — the keys will be artist names and the values will be song titles. (What limitation does this impose on our playlist?)*/
// "each artist can only have one song", right?

function updatePlaylist(playList, artistName, songTitle){
  playList[artistName] = songTitle;
  //..what? that's it?
}

function removeFromPlaylist(playList, artistName){
  delete playList[artistName];
  // apparently not "playlist.artistName" like the example said.
  // wonder why. i suppose it makes sense to mirror here. why didn't the example mirror then?
}
