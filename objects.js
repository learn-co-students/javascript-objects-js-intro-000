var playlist = new Object({"Moody Blues":"In your wildest dreams"})

function updatePlaylist(myList, artistName, songTitle){
  myList[artistName] = songTitle
  return myList
}

function removeFromPlaylist(myList, artistName){
  delete myList[artistName]
  return myList
}