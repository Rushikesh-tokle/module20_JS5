
function sayHello(){
   return "Learning function in JAVASCRIPT";
}

console.log(sayHello());
console.log(sayHello());
console.log(sayHello());


//Q1 function to print a poem
console.log("Printing a poem");
function printPoem(){
    console.log("twinkle twinkle little star");
    console.log("how i wonder what you are");
    console.log("up above the world so high ");
    console.log("like a diamond in the  sky");
}

printPoem();


//Q2 create a function for dice rolling
console.log("rolloing a die");
function rollDice(){
    console.log(Math.floor(Math.random()*6)+1);
}
rollDice();


//function with arguments
//Q3 create a function with arfument which caculate average of 3 numbers
console.log("the average of three numbers");
function average(a,b,c){
console.log(`the average of three number is ${(a+b+c)/3}`);
}
average(3,10,2);

//Q4 multiplication table
console.log("the multiplication table");
function printMultiplicationTable(a){
for(let  i=1;i<=10;i++){
    console.log(i*a);
}
}
printMultiplicationTable(73);

//Return keyword
console.log("Return Keyword");

//Q5 return sum of 1 to n
 function sumOFN(n){
    let sum=0;
 for(let i=1;i<=n;i++){
sum+=i;
 }
 return sum;
 }

 console.log(sumOFN(5));

 //Q6 return concatanation of all string in an array
  let arr=["hello","Guys","Welcome","Back","to","My","Youtube","Channal!"];
  function concatArray(arr){
    let concatstr="";
    for(word of arr){
    concatstr=concatstr.concat(word);
    concatstr=concatstr.concat(" ");
    }
    return concatstr;
  }
  console.log(concatArray(arr));

  //Function Expression
  let sum=function(a,b){
    return a+b;
  }
  console.log(sum(3,2));