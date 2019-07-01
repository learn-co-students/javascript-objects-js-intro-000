var playlist =
{
  name: "titles"
}

function updatePlaylist(playlist, artistName, songTitle){ // mutate original
playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){ // mutate original

   delete playlist[artistName];

  return playlist;
}
