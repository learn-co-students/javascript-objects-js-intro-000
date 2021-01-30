let playlist = {
    "Tori Amos": "Silent All These Years"
}

function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName]
}