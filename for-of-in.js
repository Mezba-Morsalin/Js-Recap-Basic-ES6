const numbers = [1,2,3,4,5,6,7];
for (const number of numbers) {
    console.log(number)
}

const persons = {
    name : "Mejbah",
    age : 23,
}

for (const keys in persons) {
    console.log(keys)
    console.log(persons[keys])
}