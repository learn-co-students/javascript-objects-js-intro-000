let playlist = {
  'Rush': 'Tom Sawyer',
  'Queen': 'Bohemian Rhapsody',
  'The Who': 'Babba O\'Riley'
};

function updatePlaylist(playlist, artistsName, songTitle) {
	playlist[artistsName] = songTitle;
	return playlist;
}

function removeFromPlaylist(playlist, artistsName) {
  delete playlist[artistsName];
	return playlist;
}
