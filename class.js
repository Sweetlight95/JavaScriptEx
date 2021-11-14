class Human {
    constructor() {
        this.gender = 'male';
    }
    printMyGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name ='Max'
        this.gender = 'female'
    }

    printMyName() {
        console.log(this.name);
    }
}
const person = new Person();
person.printMyName();
person.printMyGender();