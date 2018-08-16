//build an array that stores first and last names. The default value of the array will be empty
var firName = [];
var lasName = [];
//Ask user for a first name, and store it in the first names array.
var firstName = prompt("enter your first name");
firName.push(firstName);
//Ask user for a last name, and store it in the last names array.
var lastName = prompt("enter your last name");
lasName.push(lastName);
//display to the window both first and last name from the array with the length of the both arrays.
window.alert(firName + lasName + firName.length + lasName.length);