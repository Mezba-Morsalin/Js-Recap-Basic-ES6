const numbers = Math.max(1,2,3,6,895,924);
console.log(numbers);

const numbers2 = [1,2,3,4,5,6,7,8,9];
const max = Math.max(...numbers2);

console.log(max)

const numbers3 = [1,2,3,4,5,6,7];
console.log(...numbers3)

const numbers4 = [512,525,630];
function number(a, b, c) {
    console.log(a,b,c)
    return a + b + c;
}
const total = number(...numbers4);
console.log(total);

const num1 = [27,56,88];
const num2 = [56,...num1,103];
num2.push(75);
console.log(...num1)
console.log(...num2)