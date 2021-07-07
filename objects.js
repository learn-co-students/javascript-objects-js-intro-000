var playlist = {TomChilton: 'Love on the other side',
                GabrielMarshaol: 'No one needs chocolate'}

function updatePlaylist(playlist, artistName, songTitle) {return Object.assign({}, playlist, 
                                                                  {[artistName]: songTitle})}

function removeFromPlaylist(playlist, artistName) {delete playlist.artistName;
                                                    return playlist}

end()
