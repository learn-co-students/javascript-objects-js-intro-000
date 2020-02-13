
var playlist = {artist : "song title",
                artist2: "song title2"};

function updatePlaylist(playlist,artistName,songTitle)
{
  playlist[artistName] = "songTitle"
}
function removeFromPlaylist(playlist,artistName)
{
  delete playlist[artistName];
  return playlist;
}
