var playlist = new Object ({Normani: 'Motivation'});


var updatePlaylist = function (playlist, artistName, songTitle){

 return Object.assign(playlist, { [artistName]: songTitle })

}



var removeFromPlaylist = function (playlist, artistName){


delete playlist.Slowdive;

playlist;

}
