var playlist = new Object();
playlist['artist1'] = 'song1';
playlist['artist2'] = 'song2';




function updatePlaylist(plist,artist,song) {
    plist[artist] = song;

}



function removeFromPlaylist(plist,artist) {
   delete plist[artist];
   return plist;

}
