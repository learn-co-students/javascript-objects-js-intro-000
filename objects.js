// var meals = {};
// var nouveauMeals = new Object();
/* function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
  // return Object.assign(obj, { [key]: value });
}
  // it's important that we merge everything into
  // a new object such as the empty {}.
    // Otherwise, the object obj will be modified.
    // Test what happens if this line was written as:
    // return Object.assign(obj, { [key]: value })

const recipe = { eggs: 3 }

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
// returns `{ eggs: 3, chocolate: '1 cup' }`

recipe // { eggs: 3 }

// console.log(updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup'));
// console.log(recipe); */

var playlist = {
  'Slowdive': "Eenie Meenie",
  'My Bloody Valentine': "Baby",
  'Phil Ochs': "Mr. Roboto"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]:songTitle});
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

// console.log(updatePlaylist(playlist, 'Phil Ochs', 'Draft Dodger Rag'));
// console.log(removeFromPlaylist(playlist, 'Phil Ochs'));
