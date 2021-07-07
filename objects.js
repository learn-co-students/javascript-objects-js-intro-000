var playlist={'Robbie Willams': "Rock DJ ",

            'Adam Levine': "Purple Rain"};

function updatePlaylist(playlist, artistName, songTitle){

  playlist[artistName]=songTitle;
  return playlist;
  

}
function removeFromPlaylist(playlist, artistName){

delete playlist[artistName];
 return playlist;
}
