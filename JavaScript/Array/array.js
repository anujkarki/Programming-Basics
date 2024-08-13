//array
const array_car = ['Hundai', 'Honda', 'MG', 'Suzuki', 'BMW'];

//displaying every elements of array
for (let i = 0; i < array_car.length; i++) {
  console.log(array_car[i]);
}

//array can be used to store the data of different types and objects
const arr = [
  { Name: 'Anuj Karki', Age: 23, Gender: 'Male', isActive: true },
  { ProductId: 14, ProductName: 'Pen', isAvilable: true },
];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//adding elements in array
array_car.push('Ford'); //using push() function
array_car[array_car.length] = 'Mitsubhisi';

//join--used to convert the seperator
console.log(array_car.join('--'));

//pop()--returns last inserted data and removes it.(LIFO)
console.log(array_car.pop());

//shift()--returns first element of array and removes it.(FIFO)
console.log(array_car.shift());
console.log(array_car);

//unshift()--insert element to first index [0]
array_car.unshift('Toyota');
console.log(array_car);

//replacing the specific index elements [i]
array_car[0] = 'Tata';
console.log(array_car);

//arr1.concat(arr2,arr3)-- merges two or more array
const car_list = ['Volkswagen', 'Toyota', 'Daimler'];
const cars = car_list.concat(array_car);
console.log(cars);

//changing data type to string
console.log(cars.toString());

//sort()
console.log(cars.sort());

//reverse()
console.log(cars.reverse());

//numeric sort
const numbers = [12, 45, 12, 47, 15, 14, 6, 2, 4, 3, 2, 1, 124, 6, 52, 62];
console.log(
  numbers.sort(function (a, b) {
    return a - b; //b-a for decending
  })
);

//array.map()-returns a new array after performing some function
const numMap = numbers.map(double);
function double(value) {
  return 2 * value;
}
console.log(numMap);

//array.filter()-filter the array on certain defined condition
const numFilter = numbers.filter(filter);
function filter(value) {
  if (value % 2 !== 0) {
    return value;
  }
}
console.log(numFilter);

const carsList = cars.filter(carFilter);
function carFilter(car) {
  if (car.startsWith('T')) {
    return car;
  }
}
console.log(carsList);
