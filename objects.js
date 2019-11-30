var playlist =  {
  Slowdive: 'Alison',
      ['My Bloody Valentine']: 'Sometimes'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist["Phil Ochs"] = "here is to the State of Mississippi"

  return playlist
}

function  removeFromPlaylist(playlist, artistName, songTitle) {

  delete playlist.Slowdive;

  return playlist

}
