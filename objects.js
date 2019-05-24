var playlist = { jimi: "The wind cries Mary",
                 steve: "For the love of God"
               }

function updatePlaylist (playlist, artist, song) {
    playlist[artist]=song
    return playlist
}

function removeFromPlaylist (playlist, artist) {
    delete playlist[artist]
    return playlist
}
