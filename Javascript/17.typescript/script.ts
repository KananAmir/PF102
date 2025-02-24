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


type Genre = {
    id: string,
    name: string,
    bookCount: number,
    description: string
}

const genres: Genre[]=  [
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
