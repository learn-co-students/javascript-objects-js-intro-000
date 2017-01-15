/*
it('defines an object called `playlist` containing at least one artist-song pair', () => {
  expect(typeof playlist).to.equal('object')
  expect(Object.keys(playlist).length).to.be.greaterThan(0)
})
*/
var playlist = { artist01 : "song01"  ,
                 artist02 : "song02"  ,
                 artist03 : "song03"  ,

 };
 ///////////////////////////////////////////////////////////////////////////////
 /*
 describe('updatePlaylist(playlist, artistName, songTitle)', () => {
   before(() => {
     playlist['Slowdive'] = 'Alison'
     playlist['My Bloody Valentine'] = 'Sometimes'
   })

   it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
     updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

     expect(playlist).
       to.contain.all.keys({'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})
   })
 })
 */


 function updatePlaylist(playlist, key, value) {
                                                    playlist[key] = value;

                                                    return playlist;
}

////////////////////////////////////////////////////////////////////////////////
/*
describe('removeFromPlaylist(playlist, artistName)', () => {
  it('removes `artistName` from `playlist`', () => {
    removeFromPlaylist(playlist, 'Slowdive')

    expect(playlist).
      to.contain.all.keys({'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})

    expect(playlist).
      not.to.have.all.keys({'Slowdive': 'Alison'})
  })
})
*/
function removeFromPlaylist(playlist, artistName) {
                                                      delete  playlist.artistName;

                                                      return playlist;
}
