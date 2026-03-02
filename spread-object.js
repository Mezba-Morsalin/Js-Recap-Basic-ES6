const person1 = {
    name : "Mejbah",
    age : 23,
}
const person2 ={...person1};
person2.designation ='Developer',
person2.salary = 25000,
console.log(person1);
console.log(person2);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combind = [arr1 , arr2]
console.log(combind);

let person = { name: 'Mezba', age: 23 };
let contact = { email: 'mezba@example.com' };

const combind2 = {...person, ...contact};
console.log(combind2)