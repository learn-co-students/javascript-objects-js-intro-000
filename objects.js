var playlist = {"Taylor Swift": "Shake it Off"};

function updatePlaylist(list, artistName, songTitle) {
    return list[artistName] = songTitle;
}

function removeFromPlaylist(list, artistName) {
    delete list[artistName];
    return list;
}
