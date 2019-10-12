var playlist = {oliverTree:"alien boy"}

function updatePlaylist(list, name, title) {
  var new_obj = list[name] = title
  return new_obj
}

function removeFromPlaylist(list, name) {
  delete list[name]
}