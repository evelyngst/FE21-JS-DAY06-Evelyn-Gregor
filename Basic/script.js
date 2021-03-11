var sandwiches = `{
    "sandwich": "hamburger",
    "calories": "260"
}`;
var newSandwiches = JSON.parse(sandwiches);
console.log(newSandwiches.sandwich);

var fries = ` {
    "fries_size": "Large French Fries",
    "calories": "570"
}`;

var newFries = JSON.parse(fries);
console.log(newFries);

document.getElementById("write").innerHTML = `My favorite sandwich is a ${newSandwiches.sandwich} which has approximately ${newSandwiches.calories} calories, along with it I enjoy eating ${newFries.fries_size} which have about ${newFries.calories} calories.`

