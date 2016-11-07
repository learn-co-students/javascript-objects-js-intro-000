var playlist = {
   Adele: 'Hello',
   Rihanna: 'Stay'
 }

 function updatePlaylist(obj, key, value){
    return Object.assign({}, obj, {[key]: value});

 }

  function removeFromPlaylist(obj, key){
    delete obj[key];
    return obj;
  }
