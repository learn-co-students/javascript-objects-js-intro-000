var playlist= {artistName:"songTitle"};

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist['Slowdive'] = 'Alison';
  playlist['My Bloody Valentine'] = 'Sometimes';
  updatePlaylist(playlist,'Phil Ochs', "Here's to the State of Mississippi")
  return playlist;
}

function removeFromPlaylist(playlist, 'Slowdive')
{
  delete playlist['Alison'];
  return playlist;
}
