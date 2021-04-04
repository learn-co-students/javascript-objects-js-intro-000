var playlist =
{
  Coldplay: 'Clocks'
};

function updatePlaylist(playlist, artistName, songName)
{
  playlist[artistName] = songName;
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName];
}
