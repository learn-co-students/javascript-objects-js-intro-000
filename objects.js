var playlist = {drake:"One Dance"}

function updatePlaylist(obj,key,value)
{
  obj[key] = value
  return obj
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist.drake;
}
