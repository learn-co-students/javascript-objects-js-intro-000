var playlist = {}

function updatePlaylist(playlist, artistName, songTitle) {
	return playlist.assign({}, {artistName: songTitle})
}

function removeFromPlaylist(playlistObject, artistName) {
	delete playlistObject.artistName
	return playlistObject
}