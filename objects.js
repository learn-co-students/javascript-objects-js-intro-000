let playlist = {
  artistName: 'songtitle'
}
function updatePlaylist(playlist, artistName, songTitle){
playlist[artistName] = 'songtitle';
}
function removeFromPlaylist(playlist, artistName){
delete playlist[artistName];  
}
