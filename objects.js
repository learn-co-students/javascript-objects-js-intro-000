var playlist = {
    Beyonce: "Halo"
};

function updatePlaylist (obj, artistName, songTitle) {
    //Because we are using a variable for the name of the key, it must be enclosed in brackets.
    playlist[artistName] = songTitle;

    return playlist;
}

function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName];
}
