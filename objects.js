
var playlist = ({Slowdive: "Alison"}, {My Bloody Valentine: "Sometimes"} );

function updatePlaylist(playlist, artist, songTitle) {
  playlist.assign({Phil Ochs: "Here's to the State of Mississippi"});
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.Slowdive;
}
