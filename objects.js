var playlist = {
  'Dua Lipa': 'IDGAF', 'Zedd':'Middle', 'Ella Eyre':'Answerphone', 'Hayley Kiyoko':'Curious'
}

function updatePlaylist(playlist, artist, song){
  playlist[artist]=song
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}
