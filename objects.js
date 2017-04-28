var playlist = {
  fiftyCent:["song 1", "song 2"],
  mikeJackson: ["song 3", "song 4"]
}

function updatePlaylist(obj, artistName, songtitle) {
      return Object.assign({}, obj, [artistName]:songtitle);
}

updatePlaylist(playlist, 'Eminem', 'song 5');
