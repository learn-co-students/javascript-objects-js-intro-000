var playlist = {
  bruce springsteen: "Born In The USA",
  bryan adams: "Summer Of 69",
  sting: "I'll be missing you"
};

function updatePlaylist(playlist, artist, songTitle){
  playlist[artist] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist;
  return playlist;
}
