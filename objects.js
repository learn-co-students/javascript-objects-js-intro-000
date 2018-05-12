var playlist = {
    artist1: ["song1","song2"],
    artist2: ["song1","song2"],
    artist3: ["song1","song2"],
    artist4: ["song1","song2"],
    artist5: ["song1","song2"],
 };

function updatePlaylist(playlist,artist,songtitle){
  playlist[artist]=songtitle
  return playlist
}
function removeFromPlaylist(playlist,artist){
  delete playlist[artist]
  return playlist
}
