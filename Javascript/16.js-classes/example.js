// 1)Rectangle adında bir class yaradın.
// Rectangle class-ına calculateArea() adlı bir metod daxil edin. 
// Bu metod width və height dəyərlərini istifadə edərək düzbucaqlının sahəsini hesablayacaq 
// və geri qaytaracaq.

// Rectangle class-ına calculatePerimeter() adlı başqa bir metod daxil edin.
// Bu metod width və height dəyərlərini istifadə edərək düzbucaqlının perimetrini hesablayacaq və geri qaytaracaq.

// Reactangle sinifinin instanceni yaradın və onun sahəsini və perimetrini hesablayın.

// Nümunə:

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
       return this.width * this.height
    }

    calculatePerimeter() {
       return (this.width + this.height)*2
    }
}

//instance of Reactangle class
const myRectangle = new Rectangle(5, 10);

console.log("Area of the rectangle:", myRectangle.calculateArea()); //  50
console.log("Perimeter of the rectangle:", myRectangle.calculatePerimeter()); // 30


const numbers = [1,2,3]
const str =  new String("lorem")
console.log(numbers);
console.log(str);


String.prototype.getFirstChar = function(){
    return this[0]
}

console.log(str.getFirstChar());

let userName = "Jhon"

console.log(userName.getFirstChar());

// hello -> HeLlO
// String.prototype.vavy = function(){
//     console.log("i am vavy string");
    
// }

// userName.vavy()
String.prototype.vavy = function(){
   let result = ""

   for (let i = 0; i < this.length; i++) {
    if(i%2==0){
        result+=this[i].toLowerCase()
    }else{
        result+=this[i].toUpperCase()
    }
   }

   return result
}
let sampleText = "lorem ipsum dolor"
console.log(userName.vavy());
console.log(sampleText.vavy());

String.prototype.reverseStr = function(){
    let result = ""
    for (let i = this.length - 1; i >= 0; i--) {
        result+=this[i]
    }  

    return result
}

console.log(sampleText.reverseStr());
console.log("abcde".reverseStr());

// custom method for empty array

Array.prototype.empty = function(){
    this.length = 0
}

let students = ["nijat", "sabina", "nihad"]
console.log(students);

students.empty()
console.log(students);
