const fs = require('fs');

const genders = [
    'Male',
    "Female"
];

const maleNames = [
    'Joe',
    'Daniel',
    'Matthew',
    'Lucas',
    'James',
    'Robert',
    'Andrew',
    'Jerry',
    'Tom',
    'Izaak',
];

const femaleNames = [
    'Marlene',
    'Sandra',
    'Patricia',
    'Camille',
    'Estelle',
    'Kathrine',
    'Naomi',
    'Francesca',
    'Fei',
    'Betty',
];

const lastNames = [
    'Cooper',
    'Smith',
    'Jones',
    'Williams',
    'Taylor',
    'Davies',
    'Wilson',
    'Evans',
    'Thomas',
    'Rodriguez',
];

const people = [];

function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

for (i = 0; i < 20; i++) {
    let obj = {
        gender: '',
        name: '',
        lastName: '',
        age: '',
    };

    const randGender = randChoice(genders);

    if (randGender === 'Male') {
        const name = randChoice(maleNames);
        obj.gender = 'Male';
        obj.name = name;
    }

    if (randGender === 'Female') {
        const name = randChoice(femaleNames);
        obj.gender = 'Female';
        obj.name = name;
    }

    obj.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    obj.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

    people.push(obj);
}

const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
    if (err) {
        console.log('Something went wrong :(');   
        throw err;
    }
    console.log('The file has been generated :) Check people.json');
});