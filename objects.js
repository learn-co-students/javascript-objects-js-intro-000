
playlist =  {"Kanye":"Gold Digger"};
artist = "Phil Ochs";
title = "Here's to the State of Mississippi";
function updatePlaylist(playlist,artist,title){
  playlist [artist] = title;
  return playlist
}
//artist = "Kanye"

  function removeFromPlaylist(playlist,artist){

    delete playlist[artist]
    return playlist
}
