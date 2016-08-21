var playlist = {
  "kim walker": "I Need You More",
  "Girma Yifrashewa": "Love and Peace"

 }

 function updatePlaylist(playlist, artistName, songTitle) {
   playlist[artistName] = songTitle
   return playlist
 }

 function removeFromPlaylist(playlist, artistName) {
   delete playlist[artistName]
   return playlist
 }
