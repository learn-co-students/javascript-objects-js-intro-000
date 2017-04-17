var playlist = {
  taylorswift: "blank_space",
  sia: "the_greatest",
  missy_elliot: "get_ur_freak_on"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
