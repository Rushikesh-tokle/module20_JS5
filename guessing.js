let maxNum=prompt("Enter the highest number");
console.log(maxNum);

let rand_Number=Math.floor(Math.random()*maxNum)+1;
console.log(rand_Number);

let guess=prompt("enter your guess");
while(true){
  if(guess==rand_Number){
    alert("Congratulations you guessed it correct");
    break;
  }
  else if(guess>rand_Number){
    guess=prompt(" No your guess  is bigger than the number try again");
  }
  else if(guess<rand_Number){
    guess=prompt(" No your guess  is smaller than the number try again");
  }
  else if(guess=="quit"){
    alert("Game quitted Successfully");
  }
}

