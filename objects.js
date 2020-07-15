var playlist = {"Billy Joel" : "Piano Man"}
function updatePlaylist(playlist, artistName, songTitle) {return playlist[artistName] = songTitle;}
function removeFromPlaylist(playlist, artistName) {(delete playlist[artistName] ? playlist : pass);}
