const hisName = {
    name: "Mezba",
    age: 23,
    education: "BBA Hon's 2nd Year"
}
Object.freeze(hisName)
Object.seal(hisName)
hisName.name = "Mezba Morsalin";
hisName.age = 24;
delete hisName.education
const values = Object.values(hisName)
const keys = Object.keys(hisName)
const entries = Object.entries(hisName)
console.log(entries)