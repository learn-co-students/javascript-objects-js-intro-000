var playlist = {
  "Lady Gaga": 'Pokerface',
  'Louie Armstrong': 'Wonderful World',
  'The Beatles': 'Love Me, Do'
};

playlist['Lady Gaga'] === 'Pokerface' // true
playlist['The Beatles'] === 'Obladi' // false
playlist['Banana'] === undefined // object playlist does not contain key 'Banana'
playlist['Millie Say Russ'] = 'Cookie Time'


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
