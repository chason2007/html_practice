//1. Create a function createArray that takes 3 arguments and returns an array containing those three values.
function createArray(a, b, c) {
  return [a, b, c];
}

const result = createArray(10, 20, 30);
console.log(result);

//2. Create a function stringOnly that accepts any number of arguments, but returns an array containing only the arguments that are strings.


//3. Create a function squareNumbers that accepts numbers as arguments and returns an array of each number squared.
function squareNumbers(...numbers) {
  return numbers.map(num => num * num);
}

const q3 = squareNumbers(2, 4, 6, 8);
console.log(q3);

//4. Create a function getEvenNumbers that accepts numbers as arguments and returns an array containing only even numbers.
function getEvenNumbers(...numbers){
    return numbers.filter(num=>num%2==0);
}
const q4 = getEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8);
console.log(q4);

//5. Create a function collectNames that accepts name arguments and returns an array of names in uppercase.
function collectNames(...names) {
  return names.map(name => String(name).toUpperCase());
}
const q5 = collectNames("alice", "Bob", "charlie");
console.log(q5);

//6. Create a function makeUser that takes 3 arguments: name, age, city.
function makeUser(name, age, city) {
  return [
    { name: name, age: age, city: city }
  ];
}
const user = makeUser("Sid", 22, "Delhi");
console.log(user);

//7. Create a function addTen that takes any number of arguments and returns an array where each number is increased by 10.
function addTen(...numbers) {
  return numbers.map(num => num + 10);
}

const q7 = addTen(5, 20, 30);
console.log(q7);

//8.Create a function createFruitArray where if no arguments are passed, it returns ["apple", "banana"].
// If arguments are passed, return those arguments as an array.

function createFruitArray(...fruits) {
  if (fruits.length === 0) {
    return ["apple", "banana"];
  }
  return fruits;
}
console.log(createFruitArray());
console.log(createFruitArray("mango", "orange"));



