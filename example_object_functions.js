function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function updateObjectWithKeyAndValue(obj, key, value) {
  //merging into a new object, specifying a new object at the get go:
  return Object.assign({}, obj, { [key]: value })
}

// more concise:
//nondestructively update an Object while preserving the old:
function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign( {}, targetObject, updatesObject )
}
