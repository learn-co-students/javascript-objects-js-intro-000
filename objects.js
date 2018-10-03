var playlist = {
  madonna: "like a virgin",
  coldplay: "yellow",
  kanye: "gold digger"
  }

function updatePlaylist(object,artist,song) {
  object[artist]=song;
  return object
}

function removeFromPlaylist(playlist,artist) {
  delete playlist[artist];
  return playlist
}
