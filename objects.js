var playlist = {"Katy Perry":"Teenage Dream", "Mabel":"Mad Love", "Kanye West":"Love Lockdown", "Whitney Houston":"Greatest Love of all" }
function updatePlaylist(playlist, artistName, songTitle) {playlist[artistName] = songTitle; return playlist}
function removeFromPlaylist (playlist, artistName) {delete playlist[artistName]; return playlist}
