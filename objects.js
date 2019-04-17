var playlist ={
Leonard_Cohen: "Halleluja",
Otis_Redding: "Sitting on the dock of th bay",
John_Paul_Young: "Love is in the air"
};

function updatePlaylist (object, key, value) {
object[key] = value
return object
}

function removeFromPlaylist (object, name){
delete object[name]
return object
}
