var meals = {};
var meals = new Object();

var meals = {breakfast : 'oatmeal'};
var meals = new Object ({breakfast : 'oatmeal'})


var meal = {

 breakfast: 'eggs',
 breakfast: 'bacon'

}
//keys must be unique, if you initialize it, only the last keys value pair.
//this example will print bacon.


var meal = {

 breakfast: 'bacon',
 lunch:     'bacon',
 dinner:    'bacon'

}
//values dont have to be unique

/*If you have a variable  const firstMeal = 'breakfast';
and tried to make an object
var meals = {
firstmeal: 'oatmeal'
}
the meals object's key would be first meal not breakfast.
*/




//updating existing key-value pair

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
 obj[key] = value;

 return obj;

}

const recipe = { eggs: 3 }
destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups');


//OBJECT.ASSIGN() update

Object.assign({eggs: 3}, {flour: '1 cup'})
Object.assign({eggs: 3}, {chocolate : '1 cup', flour: '2 cups'}, {flour: '2 1/2 cups'})
// eggs 3, chocolate 1 cup, flour 2 1/2 cups
// if two objects share a key, the right-most object valeu for that key will win
//like example flour..

function updateObjectWithKeyAndValue(obj, key, value){
 return Object.assign({},obj, {[key] : value })
}
const recipe = {eggs: 3}

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup');
// returns eggs:3 chocolate: 1 cup
recipe;
//return eggs:3


// DELETING A KEY-VALUE PAIR
var meals = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes" };

// the `delete` operator returns `true` if it has successfully
// deleted, `false` otherwise
delete meals.dinner; // true

meals;
// returns { breakfast: "oatmeal", lunch: "turkey sandwich" }

//CHANGING A VALUE
var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};
meals.breakfast = ["oatmeal", "banana"];

meals;
// {
//   breakfast: ["oatmeal", "banana"],

//OR USING ASSIGN TO PRESERVE THE ORIGINAL OBJECT
Object.assign({}, meals, { breakfast: ['oatmeal', 'banana'] })
