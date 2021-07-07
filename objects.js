var playlist = { Jaden: 'SOHO',
                  Joji: 'worldstar money',
                  Drake: 'Passionfruit'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
    return playlist};

function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName]
      return playlist};
