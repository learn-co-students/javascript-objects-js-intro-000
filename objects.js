let playlist = { jzee:'hi', adel: 'hello', acdc: 'sugar'}

function updatePlaylist(playlist, artistName, songTitle) {
	return playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
    return delete playlist[artistName]
}
