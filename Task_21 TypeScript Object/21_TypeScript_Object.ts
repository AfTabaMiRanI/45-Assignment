// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.





// Write a program that creates Objects containing these items.

// Data type of person object
interface person {
        age : number,
        name : string,
        nationality : string,
        student : Boolean 
}


// person object
let person = {
        age : 26 ,
        name : 'Aftab' ,
        nationality : 'Pakistan' ,
        student : true
}

// print object
console.log(person);

// Data type of object
interface car {
        maker : string,
        color : string,
        automatic : boolean
}

// Car object
let car = {
        maker : 'toyota',
        color : 'Black',
        Automatic : true
}

// print car
console.log(car);