var playlist = new Object({ artist1: "song1"});

function updatePlaylist(aplaylist, artist, title){
 return Object.assign({}, aplaylist, {[artist]: title});
}

function removeFromPlaylist(playlist,artist){
    var aplaylist = playlist;
    delete aplaylist[artist];
    return aplaylist;
}
