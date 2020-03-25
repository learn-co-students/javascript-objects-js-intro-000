var playlist = {
  Slowdive: 'Alison',
};

playlist['My Bloody Valentine'] = 'Sometimes';

function updatePlaylist() {
  
  playlist['Phil Ochs'] =  "Here's to the State of Mississippi";
  
  return playlist;
  
}

function removeFromPlaylist() {
  
delete playlist.Slowdive;

return playlist; 
  
  
}
  
  
  

