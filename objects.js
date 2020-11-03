var playlist = {
    'Hanoi Rocks': 'Never Leave', 
    'Led Zeppelin': 'Kashmir'
}

function updatePlaylist(playlist, artist, song) {
    playlist[artist] = song
    return playlist
}

function removeFromPlaylist(playlist, artist) {
    delete playlist[artist]
  
    return playlist
}