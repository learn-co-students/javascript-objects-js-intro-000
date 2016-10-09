var playlist = { Alicia: "Falling", Britney: "Toxic", Mumford: "Below my Feet"}

function updatePlaylist(object, key, item){
return Object.assign({}, object, {[key]: item})
}

function removeFromPlaylist(object, key){
delete object[key]
return object
}
