var sandwiches = `{
    "sandwich": "hamburger",
    "calories": "260"
}`;
// No comma after the last value!!
var newSandwiches = JSON.parse(sandwiches);
//JSON.parse can also be used in a JS file that is not a JSON file! to convert the JSON text format.
console.log(newSandwiches.sandwich);

var fries = ` {
    "fries_size": "Large French Fries",
    "calories": "570"
}`;

var newFries = JSON.parse(fries);
console.log(newFries);

document.getElementById("write").innerHTML = `My favorite sandwich is a ${newSandwiches.sandwich} which has approximately ${newSandwiches.calories} calories, along with it I enjoy eating ${newFries.fries_size} which have about ${newFries.calories} calories.`
// backtick only needs to be applied once around the whole sentence (not around every $object)

