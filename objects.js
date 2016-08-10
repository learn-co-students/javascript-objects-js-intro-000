//Defines an object called `playlist`
var playlist = {'artist': [],};

//adds the `artistName: songTitle` key-value pair to `playlist`
function updatePlaylist(object, key, value) {
	object[key] = value;
	return object;
};

 //Removes `artistName` from `playlist`
 function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];
    return playlist;
 };