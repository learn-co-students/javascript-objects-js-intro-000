let playlist = {
  Doors: "People are strange",
  Beatles: "Yesterday",
  Rolling: "Not today"
}

const updatePlaylist = (playlist, artist, songTitle) => {
  playlist[artist] = songTitle;
  return playlist;
}

const removeFromPlaylist = (obj, artist) => {
  delete obj[artist];
  return obj;
}
