var playlist={"kishore":"yeh jo mohabbat hai", "rafi":"kya hua tera","lata":"kitni akeli"}


function updatePlaylist(playlist,artistName,songTitle){
       playlist[artistName]=songTitle;
       return playlist;

}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist;
}
