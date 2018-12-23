var playlist={
Adele:'Hello!'
}
var updatePlaylist=(playlist,artistname,Hello)=>{
playlist['Phil Ochs']='Slowdive';
return playlist;
}
var removeFromPlaylist=(playlist,artistname)=>{
delete playlist.Slowdive;
return playlist;
}
