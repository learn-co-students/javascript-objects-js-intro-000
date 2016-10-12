var playlist = {U2: 'One'};

function updatePlaylist(object, key, value){
  playlist = {};
  playlist["Phil Ochs"] = "Here's to the State of Mississippi";
  return playlist;
}

function removeFromPlaylist(Object, artistName){
  var playlist = {U2: "One"};
  delete playlist["U2"];
  return playlist;
}
