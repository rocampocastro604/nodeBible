// Dos formas de crear objetos

// const person = {
//     name: "Ricardo",
//     lastName: "Ocampo",
//     rh: "A-",
//     getFullName() {
//         return this.name + " " + this.lastName;
//     }
// }

// console.log(person.getFullName());

//Segunda forma de crear objetos con una clase
class Person {
    
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

    getName(){
        return this.name;
    }

    getFullName(){
        return this.name + " " + this.lastName;
    }
}

const person = new Person("Ricardo", "Ocampo");
let name = person.getName();
let fullName = person.getFullName();
console.log(name)
console.log(fullName);
