function numberValue (...num1) {
    console.log(num1)
}
numberValue(54,52)

function getValue (...numbers) {
    let count = 0;
    for (const sum of numbers) {
        count = count + sum
    }
    return count;
}
const result = getValue(1,2,3,4)
console.log(result)