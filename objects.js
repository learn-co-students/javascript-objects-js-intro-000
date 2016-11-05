var playlist = {
  'Foo Fighters': 'Everlong',
  Prince: 'Purple Rain'
}

function updatePlaylist(obj, key, value){
  return Object.assign({}, obj, {[key]: value});

  // obj[key] = value;
  // return obj;
}

 function removeFromPlaylist(obj, key){
   delete obj[key];
   return obj;
 }
