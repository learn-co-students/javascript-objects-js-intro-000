var playlist = {
  'Beyonce' : 'Formation',
  'Lady Gaga' : 'Million Reasons',
  'Billy Joel' : 'Always a Woman',
  'Train' : 'Drops of Jupiter',
  'Fleetwood Mac' : 'Silver Springs',
  'Sam Smith' : 'Too Good at Goodbyes',
  'Lizzo' : 'Truth Hurts',
  'Robyn' : 'Dancing on My Own'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
};
