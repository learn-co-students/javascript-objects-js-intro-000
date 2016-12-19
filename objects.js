
var playlist={"lennon":"tomorrow"}
function updatePlaylist(playlist, artistName, songTitle) {Object.assign(playlist,{[artistName]:songTitle})}
function removeFromPlaylist(playlist, artistName) {delete playlist[artistName]; return playlist;}