// Instantiating and assigns an Object
var playlist = {'Carlos Paiao': 'qualquer coisa', 'marco paulo': 'tenho dois amores'};

// Adds a key:value pair
function updatePlaylist(playlist, artistName, songTitle){
    return Object.assign({}, playlist, { [artistName]: songTitle });
}

// Removes a key:value pair from Object
function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName];
    return playlist;
}
