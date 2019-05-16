var playlist = {'My Bloody Valentine' : 'Sometimes',
'Phil Oche' : ' Heres to the state of Mississipi', 'Slowdive' :'Alison'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist (playlist, artistName) {
    delete playlist[artistName]
    return playlist
  }
