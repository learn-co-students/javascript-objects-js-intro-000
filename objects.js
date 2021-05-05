var playlist = {"Meat Loaf": "Seize the Night"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle }

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName]
    return playlist
}