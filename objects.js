var playlist = {'duckman' : 'Bobbamir'};

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, name)
{
  delete playlist[name];
  return playlist;
}
