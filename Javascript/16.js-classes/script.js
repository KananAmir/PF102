// oop - object oriented proqramming
// 4 main principles - abstraction, inheritance, polymerphsim, encapulation

// js classes

// access modifiers: public, private, protected

//static

class User {
    //properties / fields
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    // methods

}

// const obj = {}
// const obj = new Object()

// user instance
// const user = new User("jhon_doe", "jhon@code.edu.az", "salam123") 
// const user2 = new User("mammad", "mammad@code.edu.az", "mammad123")
// console.log(user);
// console.log(user2);

class Human {
    static id = 0;
    constructor(fName, lName, age) {
        if (this.constructor === Human) {
            throw new Error("Abstract class'dan instance yarada bilməzsən!")
        }
        this.firstName = fName
        this.lastName = lName
        this.age = age
        this._status = "offline"
        this.id = ++Human.id
    }
    // methods
    getInfo() {
        return `Salam, mən ${this.firstName} ${this.lastName}`
    }

    getBirthYear() {
        const date = new Date()
        return date.getFullYear() - this.age
    }

    getRole() {
        return "human"
    }

    getStatus() {
        return this._status
    }
}

// const human = new Human("miri", "huseynov", 16)
// console.log(human);

// const human2 = new Human("ruqayya", "asgarova", 18)
// console.log(human);
// console.log(human.getInfo());

// console.log(human2.getInfo());


// console.log(typeof human); //object
// console.log(typeof Human); //function



class Teacher extends Human {
    constructor(fName, lName, age, subject, experienceYear, salary) {
        super(fName, lName, age)
        this.subject = subject
        this.experienceYear = experienceYear
        this.salary = salary
    }

    //polymerphism
    getRole() {
        return "teacher"
    }

    changeStatus() {
        this._status = "online"
    }
}

class Student extends Human {
    faculty
    #gpa
    constructor(fName, lName, age, faculty, gpa) {
        super(fName, lName, age, faculty, gpa)
        this.faculty = faculty
        this.#gpa = gpa
    }

    getRole() {
        return "student"
    }

    //encapulation
    get gpa() {
        return this.#gpa
    }
    set gpa(newValue) {
        this.#gpa = newValue
    }
}

const teacher1 = new Teacher("kanan", "amirov", 27, "programming", 3, 120)
console.log(teacher1);
console.log(teacher1.getInfo());

const student1 = new Student("ruqayya", "asgarova", 18, "IT", 3.4)
console.log(student1);
console.log(student1.getInfo());
console.log(student1.getBirthYear());

console.log(student1.getRole());
console.log(teacher1.getRole());


console.log(student1.gpa);

student1.gpa = 4

console.log(student1.gpa);

console.log(teacher1.getStatus());

teacher1.changeStatus()

console.log(teacher1.getStatus());

// console.log(human.getStatus());
