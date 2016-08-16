var playlist ={Beatles: "Hide your love away", CaptainBeefheart: "So Glad", Ramones: "Do you wanna dance?"};
function updatePlaylist(obj, key, value)  {return Object.assign({}, obj, {[key]: value})};
function removeFromPlaylist(obj, key) {delete obj[key]; return obj};
