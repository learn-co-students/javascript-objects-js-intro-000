var playlist = {ty:"cho em o cuoi song hong"}

function updatePlaylist(playlist, artist, song){
  // playlist[artist] = song
  // return playlist
  return Object.assign(playlist,{[artist]:song})
}

function removeFromPlaylist(playlist,artistName){
  if(delete playlist[artistName]){
    console.log(`${artistName} exists in playlist and deleted!`)
    return playlist
  } else {
    console.log(`${artistName} DOES NOT exist in playlist!`)
    return undefined 
  }

}
