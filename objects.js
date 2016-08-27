var playlist = { "The Rockettes":"Sunday morning" };

function updatePlaylist(plist, name, title) {
  plist[name] = title || "";
  return plist;
}

function removeFromPlaylist(plist, name) {
  delete plist[name];
  return plist;
}
