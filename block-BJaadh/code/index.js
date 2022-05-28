// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
let newString = [...strings];
newString.push("called", "sentance");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(newString.join(" "));

// - Remove the first word in the array (strings)
let removeString = [...strings];
removeString.unshift();

// - Find all the words that contain 'is' use string method 'includes'
function is(string) {
  if (string.includes("is")) return string;
}
let isPresent = strings.filter(is);

// - Find all the words that contain 'is' use string method 'indexOf'
let allIs = strings.filter((string) => string.indexOf("is") !== -1);

// - Check if all the numbers in numbers array are divisible by three use array method (every)
let divisibleBy3 = numbers.every(function (number) {
  return number % 3 === 0;
});

// -  Sort Array from smallest to largest
let sorts = [...numbers];
function compareFunction(a, b) {
  return a - b;
}
sorts.sort(compareFunction);

// - Remove the last word in strings
let pops = [...strings];
pops.pop();

// - Find largest number in numbers
let largest = numbers.sort((a, b) => a - b).pop();

// - Find longest string in strings
let longest = string.sort((a, b) => a.length - b.length).pop();

// - Find all the even numbers
function isEven(num) {
  return num % 2 === 0;
}
let evenNumbers = numbers.filter(isEven);

// - Find all the odd numbers
function isOdd(num) {
  return num % 2 !== 0;
}
let oddNumbers = numbers.filter(isOdd);

// - Place a new word at the start of the array use (unshift)
let newWord = [...strings];
newWord.unshift("Hello");

// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3, 7);

// - Make a subset of strings array ['a','collection']
strings.slice(2, 4);

// - Replace 12 & 18 with 1221 and 1881
[...numbers].splice(numbers.indexOf(12), 1, 1221);
[...numbers].splice(numbers.indexOf(18), 1, 1881);

// - Replace words in strings array with the length of the word
let stringLength = strings.map((string) => string.length);

// - Find the sum of the length of words using above question
stringLength.reduce((acc, cv) => {
  acc = acc + cv;
  return acc;
}, 0);

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];

// - Find all customers whose firstname starts with 'J'
let customersName = customers.filter((customer) =>
  customer.firstname.startsWith("J")
);

// - Create new array with only first name
let customersFirstName = customers.map((customer) => customer.firstname);

// - Create new array with all the full names (ex: "Joe Blogs")
let customersFullName = customers.map(
  (customer) => `${customer.firstname} ${customer.lastname}`
);

// - Sort the array created above alphabetically
customersFullName.sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.
let customersVowel = customers.filter((customer) => {
  if (
    customer.firstname.toLowerCase().includes("a") ||
    customer.firstname.toLowerCase().includes("e") ||
    customer.firstname.toLowerCase().includes("i") ||
    customer.firstname.toLowerCase().includes("o") ||
    customer.firstname.toLowerCase().includes("u")
  ) {
    return true;
  } else return false;
});
