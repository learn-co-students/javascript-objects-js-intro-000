

var playlist = { artist: "the police",
                 song: "Roxanne"
               };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
   playlist;
}

function removeFromPlaylist(playlist, artistName) {
delete playlist[artistName];
playlist;


}
