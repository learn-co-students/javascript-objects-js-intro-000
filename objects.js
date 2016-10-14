var playlist = {
  timaya:"gpangolo",
  dbanj: "spiritual",
  face:"only you"
  };

  function updatePlaylist(obj, key, value) {
    return Object.assign({}, obj, {[key]:value});
    }

    function removeFromPlaylist(obj, key, value) {
      delete obj[key];
      return obj;
    }
