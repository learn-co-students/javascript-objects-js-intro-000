var playlist = {Mariah:"All I Want for Christmas is You"};
function updatePlaylist(playlist, artistName, songTitle){playlist[artistName] = songTitle;};
function removeFromPlaylist(playlist, artistName){delete playlist[artistName]; return playlist;};
