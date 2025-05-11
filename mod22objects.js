//understanding the use of this keyword
console.log("understanding the use of this keyword");
const student={
    name:"Rushi",
    age:20,
    math:90,
    sci:91,
    eng:100,

    getAvg(){
        console.log((this.math+this.sci+this.eng)/3);

    }
}
student.getAvg();

console.log("Window Object");
//window.alert("Hello everyone this is alert method of window object");


//try and Catch
console.log("try and Catch statement");
try{
console.log(a);
}catch(err){
console.log("hi everyone");
console.log(err);
}
console.log("welocme to SITS");
//arrow function
console.log("Arrow Function");
const sum=(a,b)=>{
    console.log(a+b);
};


//cube function
const cube=(n)=>{
    console.log(n*n*n);
};

const printHello= ()=> {
    console.log("hello");
};

printHello();


//arrow function implicit return
const mul=(a,b)=>(a*b);
console.log(mul(2,3));


//set timeout
console.log("SetTimeout function");
// setTimeout(()=>{
//     console.log("this is a timeout function");
// },5000);

console.log("this is after setTimeout Function");

//set Interval
console.log("SetInterval");

// let id=setInterval(()=>{
//     console.log("setInterval bolte");
// },2000);
// setTimeout(()=>{clearInterval(id);},8000);

//Write an arrow functiionn that return s squaree of a number
let printSquare=(n)=>n*n;

console.log(printSquare(2));

//function to print hello world at an interval of 2 seconds for 5 times

let id2=setInterval(()=>{
    console.log("hello world");
},2000);

setTimeout(()=>{
    clearInterval(id2);
},10000);