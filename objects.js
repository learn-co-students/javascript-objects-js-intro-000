var playlist = { shania: "Man I feel like a woman"};

function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle;

    return playlist;
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];

    return playlist;
}
