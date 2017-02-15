var meals = {}
var meals = new Object()
var meals = { breakfast: "oatmeal"}
var meals = new Object({ breakfast: 'oatmeal'})
const firstMeal = 'breakfast'
var meals = {[firstMeal]: 'oatmeal'}
meals.breakfast
meals['breakfast']
var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}
meals.snack = 'yogurt'
meals['second breakfast'] = 'bagel'
var sweetMeal = 'dessert'
meals[sweetMeal] = 'cake'
meals.dessert
meals[sweetMeal]
meals.breakfast = 'cereal'
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}
const recipe = {eggs: 3}
destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')
Object.assign({}, {foo: 'bar'})
Object.assign({eggs: 3}, {flour: '1 cup'})
Object.assign({eggs: 3}, {chocolate: '1 cup', flour: '2 cups'}, {flour: '1/2 cup'})
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}
const recipe = {eggs: 3}
updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
recipe
function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}
var meals = {breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes"}
delete meals.dinner
var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
}
meals.breakfast = ["oatmeal", "bananas"]
var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
}
Object.assign({}, meals, {breakfast: ['oatmeal', 'banana']})
var playlist = {artistName: "songTitle"}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}
