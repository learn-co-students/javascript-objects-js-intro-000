var playlist = {
  artistName: "Reminder",
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName];
};
