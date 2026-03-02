const person = {
    name : "Mejbah",
    age : 23,
}
const person2 ={...person};
person2.designation ='Developer',
person2.salary = 25000,
console.log(person);
console.log(person2);