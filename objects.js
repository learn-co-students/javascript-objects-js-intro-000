var playlist = {}

function updatePlaylist(playlist, artist, song) {
    playlist[artist] = song
    return playlist
}
//updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")
//returns {Foo Fighters: "Everlong", Prince: "Purple Rain", Phil Ochs: "Here's to the State of Mississippi"}

function removeFromPlaylist(playlist, artist) {
    delete playlist[artist]
    return playlist}
//removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye"))
