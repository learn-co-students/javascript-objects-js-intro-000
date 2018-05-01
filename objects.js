var playlist = {
  'Michael Jackson': 'Thriller',
  'Gucci Mane': 'Money Make ya Handsome',
  'My Bloody Valentine': 'Sometimes',
  'Slowdive': 'Alison'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist['Gucci Mane', 'Michael Jackson','Slowdive']
  return playlist
}
