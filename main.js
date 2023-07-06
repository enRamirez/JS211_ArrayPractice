let cars = ['Ford', 'BMW', 'Mercedez', 'Lexus']

console.log(`1. length of cars is ${cars.length}`)

let moreCars = ['Toyota', 'Hyundai', 'Tesla', 'Honda'];
let totalCars = cars.concat(moreCars);

console.log("2. " + totalCars);

console.log(totalCars.indexOf('Honda'));

console.log(totalCars.lastIndexOf('Ford'))

let stringOfCars = totalCars.join(', ')
    console.log(stringOfCars)

let carsFromStrings = stringOfCars.split(',')
console.log(carsFromStrings)

let carsInReverse = totalCars.reverse()
console.log(carsInReverse)

carsInReverse.sort();
console.log(carsInReverse.indexOf('BMW'));

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4, 6)
console.log(reptiles)
console.log(pets)

let removedReptiles = pets.splice(4, 2)
console.log(removedReptiles)

pets.splice(3, 0, "hamster");
console.log(pets)

let removedPets = console.log(pets.pop());
console.log(pets)

pets.push("bird")
console.log(pets)

let firstElement = pets.shift();
console.log(firstElement)

pets.unshift('turtle')
console.log(pets)

const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34]

function addTwo(num, index, arr) {
    arr[index] = num + 2;

}

numbers.forEach(addTwo)
console.log(numbers)