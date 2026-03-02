const {phone, price, color, variant = "Usa"} = { phone : "I phone 13 Pro Max", price : 160000, color: "Black", variant : "Japan"}
console.log(phone, price, color, variant)

const [num1, num2] = [24,26];
console.log(num1, num2);

function numberValue (num1, num2) {
    return [num1 + num2, num1 * num2];
}
const [numbers1, numbers2 ] = numberValue(23,56);
console.log(numbers1, numbers2)