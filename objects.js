var playlist = new Object({BonJovi: "Jump"})


function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle
    return playlist
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName]
    return playlist
}