const playlist = 
{
    "Man with a Mission": "Winding Road"
};

const updatePlaylist = (playlist, artistName, songTitle) =>
{
    playlist[artistName] = songTitle
    // Object.assign({}, playlist, { artistName: songTitle } );
};

const removeFromPlaylist = (playlist, artistName) =>
{
    delete playlist[artistName];
};