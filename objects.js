var playlist = {
  Kendrick: 'Swimming pools',
  Drake: 'Hotline Bling',
  Yachty: "Oprah's Bank Account",
}

var updatePlaylist = (obj, key, value) => obj[key] = value;
var removeFromPlaylist = (obj, key) => delete obj[key];
