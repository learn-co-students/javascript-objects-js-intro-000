var playlist = { "jimi hendrix": "voodoo chile" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle; //Object is Playlist -- Key is artistName -- Value is songTitle
  return playlist                  // . converts whatever is to right into a string and searches
}            // [] evaluates what's inside of brackets first then converts result in 2 string, then searches
function removeFromPlaylist(playlist, artistName) {
 delete playlist[artistName]
 return playlist
}

//playlist.songTitle = "Robocop"



//function updatePlaylist(playlist, Phil Ochs, Slowdive) {
