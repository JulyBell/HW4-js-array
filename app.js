console.log('------------- # 4');

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => console.log("Вы согласились."), 
  () => console.log("Вы отменили выполнение.") 
);


console.log('------------- # 5');

let string = 'my-short-string';
let array = string.split('-');

console.log(array);





console.log('------------- # 6');

let initialArray = ['JavaScript', 2015];
let newString = initialArray.join(' ');

console.log(newString);




console.log('------------- # 7');

let users = [
{id: 1, name: "Vic", age: 21},  
{id: 2, name: "Petya", age: 30}, 
{id: 3, name: "Jon", age: 5}
];

let filteredUsers = users.filter(item => item.age < 20);

console.log(filteredUsers);




console.log('------------- # 8');

let usersArray = [
{id: 1, name: "Vic", age: 21},  
{id: 2, name: "Petya", age: 30}, 
{id: 3, name: "Jon", age: 5}
];

let names = usersArray.map(item => item.name)

console.log(names); 



console.log('------------- # 9');


let arr = [5, 3, 8, 1];

function filterRangeInPlace(array, min, max){

	for(let i = 0; i < array.length; i++){
		if(array[i] <= min || array[i] >= max){
			array.splice(i, 1);
		}
	}
}


filterRangeInPlace(arr, 1, 4);
console.log( arr ); // [3, 1]




console.log('------------- # 10');

function stringToArray(string, separator){

	let finalArr = string.split(separator);

	return finalArr;
}

console.log(stringToArray('I learn JavaScript', ' '));




console.log('------------- # 11');

let numArray = [5, 3, 8, 1];

function slArray(arr, startIndex, endIndex){

	let newArr = arr.slice(startIndex, endIndex);

	return newArr;
}


let range = slArray(numArray, 1, 3);

console.log( range ); 
console.log( numArray ); 



console.log('------------- # 12');

function sumNums(...arr){

	let sum = 0;
	for (let i = 0; i < arr.length; i++){
			sum += arr[i];
	}

	return sum;
}

let numArr = [23, 12, 41, 4, 2]; //82
let numArr2 = [1, 4, 10, 23] //38

console.log(sumNums(...numArr, 3, ...numArr2, 1, 10)); //134





