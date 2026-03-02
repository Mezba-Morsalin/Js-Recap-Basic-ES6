const schoolName = {
    name : "Mollartek",
    1 : "Always Down Position",
    'passing-record': "80% Student are Failed Every Year",
    // students :{
    //     boys : 90,
    //     girls : 45,
    // }
}

console.log(schoolName.name);
console.log(schoolName [1]);
console.log(schoolName ['passing-record']);

console.log(schoolName.students?.boys);
console.log(schoolName.students?.girls);