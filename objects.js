var playlist = {artistNames : songTitles};

function updatePlaylist(obj, key, value){
  obj[key]=value;

  return obj;

}

updatePlaylist(playlist, Kanye, Blood);
