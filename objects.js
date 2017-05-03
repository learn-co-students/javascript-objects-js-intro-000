var playlist = { John : "what"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist["Phil Ochs"] = "slowdive"
}
//
// Object.assign({}, { foo: 'bar' })
// // { foo: 'bar' }
//
// Object.assign({ eggs: 3 }, { flour: '1 cup' })
// // { eggs: 3, flour: '1 cup' }
//
// Object.assign({ eggs: 3 }, { chocolate: '1 cup', flour: '2 cups' }, { flour: '1/2 cup' })
// // { eggs: 3, chocolate: '1 cup', flour: '1/2 cup' }

function removeFromPlaylist(playlist, artistName) {

  delete playlist["John"];
  delete playlist["Slowdive"];
}
