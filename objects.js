var playlist = new Object({ thebreakfasters: 'oatmeal',
                            u2: 'bloody sunday',
                            blackhole: 'triangle'
                             })

function updatePlaylist(obj,artist,title){
  obj[artist] = title
  return obj
}

function removeFromPlaylist(x,y){
  delete x[y];
  return x;
}
