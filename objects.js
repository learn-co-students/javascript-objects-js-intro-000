var MyBloodyValentine = 'My Bloody Valentine';
var playlist = new Object ({
  Slowdive:'Alison',
  [MyBloodyValentine]:'Sometimes'
});

function updatePlaylist(playlist, artistName, songTitle){
 playlist[artistName] = songTitle;
 return playlist;
}

updatePlaylist(playlist, 'Phil Ochs', 'Here\'s to the State of Mississippi');

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
removeFromPlaylist(playlist, 'Slowdive');
playlist;
