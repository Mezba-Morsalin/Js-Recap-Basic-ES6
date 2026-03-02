function sumNumber (a, b) {
    const sum = a + b;
    return sum;
}
// console.log(sumNumber(10, 60))

const sumNumber2 = (a, b) => a + b;
console.log(sumNumber2(45,56));

const number = x => x * 50;
console.log(number(60));

const tenNumbers = (a,b,c,d,e,f,g,h,i,k) => a + b + c + d + e + f + g + h + i + k;
console.log(tenNumbers(1,2,3,4,5,6,7,8,9,10));

const hello = () => "Hello From JS Function";
console.log(hello())