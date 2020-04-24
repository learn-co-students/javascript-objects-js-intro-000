var playlist = {IdinaMenzel: `Let It Go`, Incubus: `Drive`}

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName]
}
