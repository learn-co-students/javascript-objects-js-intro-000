var playlist = { britney: "everytime", JT: "Like I love you", JB: "love yourself" } 


function updatePlaylist (playlist, artistName, songTitle) { 

return playlist[artistName] = songTitle 

} 

function removeFromPlaylist(playlist, artistName) { 

 return delete playlist[artistName ]
 
 
 
 } 