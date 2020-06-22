var playlist={kishore:"neele"}

function updatePlaylist(object,key,value){
    return object[key]=value;
}

function removeFromPlaylist(object,key){
    delete object[key]
    return object;
}
