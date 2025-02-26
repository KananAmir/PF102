var num = 43;
// implicit vs explicit
var username = "farid";
username = "nicat";
var sampleText;
// num.toLowerCase()
var bool = true;
var empty = null;
// const students:string[]= ["farid", "sabina", "nijat", "miri", "gunel", "nihad", "azif"]
var students = ["farid", "sabina", "nijat", "miri", "gunel", "nihad", "azif"];
var scores = [100, 45, 67, 84, 93];
// console.log(students[0] * 5); //error
// scores[0].toUpperCase()
// let mixedArray = [1, "apple", true];  
// mixedArray[0].toFixed(2) //error
//union types
// const userId: number | string = 3
var userId = "salam123";
//any type
var mixedArray = [1, "apple", true];
// mixedArray[1]*3
// mixedArray[0].toUpperCase() //error
var testVariable = "test";
if (typeof testVariable === "string") {
    testVariable = testVariable.toUpperCase();
}
else if (typeof testVariable === "number") {
    testVariable = testVariable + 5;
}
else {
    console.log('The value is of an unknown type');
}
console.log(testVariable);
var student = {
    sId: "codeFe102",
    name: "ruqayya",
    gpa: 3.4,
    isGraduated: false,
    hobbies: ["sleeping", "coding", "shopping"]
};
// student.name = "miri"
console.log(student.name);
var genres = [
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
];
var variable = {
    a: "html",
    b: "css",
    c: "typescript"
};
// const employee: Employee & Human = {
//     firstName: "Miri",
//     lastName: "Huseynov",
//     employeeId: 1,
//     salary: 2000,
//     department: "IT"
// }
var employee = {
    firstName: "Miri",
    lastName: "Huseynov",
    employeeId: 1,
    salary: 2000,
    department: "IT"
};
var teacher = {
    name: "Kanan Amirov",
    age: 27
};
// teacher.age = 37 // error
console.log(teacher);
var add = function (a, b) { return a + b; };
console.log(add(5, 3)); // Output: 8
//never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
        console.log("hello");
    }
}
//functions
// function sum(a:number,b:number):number{
//     return a+b
// }
// console.log(sum(2,3));
var sum = function (a, b) {
    if (a < 0 || b < 0) {
        return "only positive numbers are allowed";
    }
    return a + b;
};
console.log(sum(-2, 3));
function userInfo(name, surname, age) {
    if (age === void 0) { age = 16; }
    return "I am ".concat(name, " ").concat(surname, " and I am ").concat(age, " years old");
}
console.log(userInfo("miri", "huseynov"));
console.log(userInfo("sabina", "kardeshova", 25));
function calcSum(a, b, c) {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}
console.log(calcSum(1, 2));
console.log(calcSum(1, 2, 3));
// console.log(calcSum(1,2,3, 4)); //error
function sumOfAllArguments() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    return args.reduce(function (sum, current) { return sum + current; }, 0);
}
console.log(sumOfAllArguments(3, 4, 5));
console.log(sumOfAllArguments(3, 4, 5, 6));
console.log(sumOfAllArguments(3, 4, 5, 6, 7));
var greeting = function (username) {
    console.log("Hello, ".concat(username));
};
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
var userData = ["nijat", 85];
// userData.push("hello")
// const endpoints = {
//     USERS: "users",
//     PRODUCTS: "products",
//     ORDERS: "orders",
// }
var Endpoints;
(function (Endpoints) {
    Endpoints["USERS"] = "users";
    Endpoints["PRODUCTS"] = "products";
    Endpoints["ORDERS"] = "orders";
})(Endpoints || (Endpoints = {}));
console.log(Endpoints.PRODUCTS);
var Color;
(function (Color) {
    Color[Color["RED"] = 1] = "RED";
    Color[Color["GREEN"] = 2] = "GREEN";
})(Color || (Color = {}));
// enum Status{
//     PENDING,
//     SUCCESS,
//     ERROR
// }
var Status;
(function (Status) {
    Status[Status["PENDING"] = 12] = "PENDING";
    Status[Status["SUCCESS"] = 13] = "SUCCESS";
    Status[Status["ERROR"] = 14] = "ERROR";
})(Status || (Status = {}));
console.log(Status.SUCCESS);
//generics
function identity(value) {
    return value;
}
identity(true);
identity("hello");
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["nijat", "ruqayya", "nihad"]));
console.log(getFirstElement([false, true, true]));
var obj = {
    content: "lorem"
};
var obj2 = {
    content: 123
};
var cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
var user = {
    age: 12,
};
