let playlist = {"BEP": "I've got a feeling"}

const updatePlaylist = (playlist, name, title) => {
  playlist[name] = title;
  return playlist;
}

const removeFromPlaylist = (playlist, name) => {
  delete playlist[name];
  return playlist;
}
