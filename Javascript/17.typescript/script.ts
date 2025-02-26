let num: number = 43

// implicit vs explicit
let username = "farid"
username = "nicat"
let sampleText: string;

// num.toLowerCase()

let bool: boolean = true

let empty: null = null


// const students:string[]= ["farid", "sabina", "nijat", "miri", "gunel", "nihad", "azif"]
const students: Array<string> = ["farid", "sabina", "nijat", "miri", "gunel", "nihad", "azif"]
const scores = [100, 45, 67, 84, 93]

// console.log(students[0] * 5); //error


// scores[0].toUpperCase()

// let mixedArray = [1, "apple", true];  

// mixedArray[0].toFixed(2) //error


//union types
// const userId: number | string = 3
const userId: number | string = "salam123"

//any type

let mixedArray = [1, "apple", true];


// mixedArray[1]*3

// mixedArray[0].toUpperCase() //error



let testVariable: unknown = "test"

if (typeof testVariable === "string") {
    testVariable = testVariable.toUpperCase()
} else if (typeof testVariable === "number") {
    testVariable = testVariable + 5
} else {
    console.log('The value is of an unknown type');

}

console.log(testVariable);


//object types

// const student: {
//     sId: string | number,
//     name: string,
//     gpa: number,
//     isGraduated: boolean,
//     className: string
// } = {
//     sId: "codeFe102",
//     name: "ruqayya",
//     gpa: 3.4,
//     isGraduated: false,
//     className: "pf102"
// }


// type keyword

type IStudent = {
    sId: string | number,
    readonly name: string,
    gpa: number,
    isGraduated: boolean,
    className?: string,
    hobbies?: string[]
}

const student: IStudent = {
    sId: "codeFe102",
    name: "ruqayya",
    gpa: 3.4,
    isGraduated: false,
    hobbies: ["sleeping", "coding", "shopping"]
}
// student.name = "miri"
console.log(student.name);

//union type

type UnionType = boolean | string | number | null | undefined;

// litheral type

type LitheralType = "a" | "b" | "c"

// let test:LitheralType = "a" 
// let test:LitheralType = "d"  //error

type ApiResponse = "pending" | "success" | "error"

// let response: ApiResponse = "success"

type Genre = {
    id: string,
    name: string,
    bookCount: number,
    description: string
}

const genres: Genre[] = [
    {
        id: "1",
        name: "Technology",
        bookCount: 50,
        description: "Explore the latest advancements in technology, from artificial intelligence and programming languages to cybersecurity and blockchain."
    },
    {
        id: "2",
        name: "Fiction",
        bookCount: 12,
        description: "Immerse yourself in captivating fictional stories filled with adventure, mystery, and unforgettable characters."
    },
    {
        id: "3",
        name: "History",
        bookCount: 35,
        description: "Discover fascinating accounts of past events, influential figures, and pivotal moments that shaped civilizations."
    },
    {
        id: "4",
        name: "Self-Help",
        bookCount: 20,
        description: "Learn practical strategies for personal growth, productivity, and achieving a fulfilling life through expert advice and inspiration."
    }
]


// interface keyword


// type Student ={
//     id: "bdu123",
//     name: string,
//     age: number,
//     faculty: string,
//     // hobbies: string[],
//     hobbies: Array<string>
// }
interface Student {
    id: "bdu123",
    name: string,
    age: number,
    faculty: string,
    // hobbies: string[],
    hobbies: Array<string>
}

// interface A {
//     a: string,
//     c: string
// }

interface A {
    a: string
}

interface A {
    c: string
}

interface B extends A{
    b: string
}

let variable: B = {
    a: "html",
    b: "css",
    c: "typescript"
}


// intersection of type

type Human ={
    firstName: string
    lastName: string
}

type Employee ={
    employeeId: number,
    salary: number,
    department: string
}

type Person = Human & Employee

// const employee: Employee & Human = {
//     firstName: "Miri",
//     lastName: "Huseynov",
//     employeeId: 1,
//     salary: 2000,
//     department: "IT"
// }
const employee: Person = {
    firstName: "Miri",
    lastName: "Huseynov",
    employeeId: 1,
    salary: 2000,
    department: "IT"
}


interface Teacher{
    name: string,
    readonly  age: number,
    subject?: string,
    salary?: number
    getInfo?: ()=>void
}

const teacher:Teacher = {
    name: "Kanan Amirov",
    age: 27
}



// teacher.age = 37 // error

console.log(teacher);


interface Add {
    (a: number, b: number): number;
  }
  
  const add: Add = (a, b) => a + b;
  console.log(add(5, 3)); // Output: 8

//never

function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true) {
        console.log("hello");
    }
}

//functions

// function sum(a:number,b:number):number{
//     return a+b
// }
// console.log(sum(2,3));

const sum = (a: number, b: number): number | string => {
    if (a < 0 || b < 0) {
        return "only positive numbers are allowed"
    }
    
    return a+b
}

console.log(sum(-2, 3));


function userInfo(name: string, surname: string, age: number = 16): string{
    return `I am ${name} ${surname} and I am ${age} years old`
}

console.log(userInfo("miri", "huseynov"));
console.log(userInfo("sabina", "kardeshova", 25));


function calcSum(a:number, b:number, c?:number){
   if (c !==undefined) {
    return a+b+c
   }
   return a+b
}

console.log(calcSum(1,2));

console.log(calcSum(1,2,3));
// console.log(calcSum(1,2,3, 4)); //error


function sumOfAllArguments(...args: number[]): number {
    let sum = 0;
    return args.reduce((sum, current) => sum + current, 0);
}

console.log(sumOfAllArguments(3,4,5));
console.log(sumOfAllArguments(3,4,5,6));
console.log(sumOfAllArguments(3,4,5,6,7));

const greeting = (username: string): void=>{
    console.log(`Hello, ${username}`);
}
greeting("Miri");


//type assortion

// type StudentType =  { id: number; name: string }

// function createStudent(student: StudentType): void {
//     console.log(`Welcome, ${student.name}!`);
//   }
  
  
//   createStudent({id: 123, name: "lorem", age: 23} as StudentType);

// const studentWithExtras = { id: 1, name: "John", age: 20 };
// createStudent(studentWithExtras as { id: number; name: string }); // Bypasses the error


//tuple

const userData: readonly[string, number, boolean?] = ["nijat", 85]

// userData.push("hello")

// const endpoints = {
//     USERS: "users",
//     PRODUCTS: "products",
//     ORDERS: "orders",
// }

enum Endpoints {
    USERS = "users",
    PRODUCTS = "products",
    ORDERS = "orders",
}

console.log(Endpoints.PRODUCTS);

enum Color {
    RED = 1,
    GREEN = 2,
}

// enum Status{
//     PENDING,
//     SUCCESS,
//     ERROR
// }

enum Status{
    PENDING = 12,
    SUCCESS,
    ERROR
}
console.log(Status.SUCCESS);


//generics

function identity<T>(value: T): T {
    return value;
  }

  identity<boolean>(true)
  identity<string>("hello")


function getFirstElement<T> (arr: T[]): T {
    return arr[0]
}

console.log(getFirstElement<number>([1,2,3]));
console.log(getFirstElement<string>(["nijat", "ruqayya", "nihad"]));
console.log(getFirstElement<boolean>([false, true, true]));


interface StorageBox<T> {
    content: T
}

const obj:StorageBox<string> = {
    content: "lorem"
}
const obj2:StorageBox<number> = {
    content: 123
}

//utility types

// interface User {
//     name: string;
//     email: string;
//     age: number
// }
//partial

// const user:Partial<User> = {
//     name: "nijat",
// }

//required


// interface User {
//     name?: string;
//     email: string;
//     age?: number
// }
// const user:Required<User> = {
//     name: "nijat",
//     email: "nijat@gmail.com",
//     age: 20
// }

//readonly
// interface User {
//     name?: string;
//     email: string;
//     age?: number
// }
// const user:Readonly<User> = {
//     name: "nijat",
//     email: "nijat@gmail.com",
//     age: 20
// }

// user.age = 22

// console.log(user);


// Record<Keys, Type>

type CatName = "miffy" | "boris" | "mordred"; //litheral
 
interface CatInfo {
  age: number;
  breed: string;
}
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

//pick

// interface User {
//     name: string;
//     email: string;
//     age: number
// }

// const user: Pick<User,"name"|"email"> = {
//     name: "sabina",
//     email: "sabina@code.edu.az"
// }

//omit


interface User {
    name: string;
    email: string;
    age: number
}

const user: Omit<User,"name"|"email"> = {
    age: 12,
}